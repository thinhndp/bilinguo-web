import React, { useState } from "react";
import classes from "./PageExercise.module.scss";
import { FaTimes, FaCheck } from "react-icons/fa";
import { Line } from "rc-progress";
import { Button, Container } from "react-bootstrap";
import ExerciseDetail from './ExerciseDetail/ExerciseDetail';
import { exerciseList } from './mock-exercises';
import { useHistory } from 'react-router-dom';

const Exercise = () => {
  const [answered, setAnswered] = useState("unanswered");
  const [userAnswer, setUserAnswer] = useState("");
  const [curExercise, setCurExercise] = useState(exerciseList[0]);
  const [progressPercent, setProgressPercent] = useState(0);
  const [sessionInfo, setSessionInfo] = useState({
    correctCount: 0,
    timeSpent: 30,
    exerciseAnswers: []
  });

  const loadNextExercise = () => {
    const exerciseCount = exerciseList.length;
    const curIndex = exerciseList.findIndex(exercise => exercise === curExercise);
    if (curIndex + 1 >= exerciseCount) {
      finishSession();
      return;
    }
    setCurExercise(exerciseList[curIndex + 1]);
    // console.log(`${curIndex} ${exerciseCount} ${progressPercent}`);
    setUserAnswer("");
    setAnswered("unanswered");
  }

  let history = useHistory();

  const getProgressPercent = () => {
    const exerciseCount = exerciseList.length;
    const curIndex = exerciseList.findIndex(exercise => exercise === curExercise);
    console.log((curIndex / exerciseCount) * 100);
    return (curIndex / exerciseCount) * 100;
  }

  const finishSession = () => {
    // console.log(sessionInfo);
    history.push("/exercise/result", { sessionInfo: sessionInfo });
  }

  const handleAnswerChange = (answer) => {
    if (answered === "correct" || answered === "incorrect") {
      return;
    }
    setUserAnswer(answer);
    if (answer === "") {
      setAnswered("unanswered");
    }
    else {
      setAnswered("typing")
    }
  }

  const handleCloseClick = () => {
    history.push("/learn");
  }

  const handleCheckClick = () => {
    let isCorrect;
    if (userAnswer === curExercise.answers[0]) {
      setAnswered("correct");
      isCorrect = true;
    }
    else {
      setAnswered("incorrect");
      isCorrect = false;
    }
    const exerciseCount = exerciseList.length;
    const curIndex = exerciseList.findIndex(exercise => exercise === curExercise);
    setProgressPercent(((curIndex + 1) / exerciseCount) * 100.0);
    setSessionInfo({
      ...sessionInfo,
      correctCount: sessionInfo.correctCount + (isCorrect ? 1 : 0),
      exerciseAnswers: [
        ...sessionInfo.exerciseAnswers,
        {
          exercise: curExercise,
          userAnswer: userAnswer,
          isCorrect: isCorrect
        }
      ]
    });
  }

  return (
    <div style={{ height: "100vh" }}>
      {/* <div>Test: "{userAnswer}"</div> */}
      <div className={classes["container"]}>
        <div className={classes["header"]}>
          <Container className={classes["progress-bar-container"]}>
            <div
              className={classes["close-button"]}
              onClick={handleCloseClick}
            >
              <FaTimes size={28} color="#bbbbbb"></FaTimes>
            </div>
            <div className={classes["progress-bar"]}>
              <Line
                percent={progressPercent}
                strokeWidth="2"
                trailWidth="2"
                strokeColor="#1CB0F6"
                trailColor="#eeeeee"
              ></Line>
            </div>
          </Container>
        </div>
        <div className={classes["exercise-detail-container"]}>
          <ExerciseDetail 
            exercise={curExercise}
            handleAnswerChange={handleAnswerChange}
            userAnswer={userAnswer}
          ></ExerciseDetail>
        </div>
        <div className={classes["footer"]}>
          { answered === "correct" ?
              <CorrectFooter answered={answered} loadNextExercise={loadNextExercise}/>
              : ( answered === "incorrect" ? 
                    <IncorrectFooter answered={answered} correctAnswer={curExercise.answers[0]} loadNextExercise={loadNextExercise}/>
                    : <UnansweredFooter answered={answered} handleCheckClick={handleCheckClick}/>
                )
          }
        </div>
      </div>
    </div>
  );
};

const CorrectFooter = props => {
  const { answered, loadNextExercise } = props;
  return (
    <div className={classes['answered-correct-footer']}>
      <div className={classes['info-and-button-container']}>
        <div className={classes['info-container']}>
          <div className={classes['check-circle'] + ' ' + classes['expand-then-shrink']}>
            <FaCheck
              size={44}
              className={classes['expand-then-shrink']}
              color="#78C800"
            ></FaCheck>
          </div>
          <div className={classes['text-container']}>
            <div className={classes['main-text']}>Chính xác</div>
          </div>
        </div>
        <Button
          variant="success"
          size="lg"
          className={classes["button"] + " " + classes["success-button"]}
          onClick={loadNextExercise}
        >
          Tiếp tục
        </Button>
      </div>
    </div>
  );
}

const IncorrectFooter = props => {
  const { answered, loadNextExercise } = props;
  return (
    <div className={classes['answered-incorrect-footer']}>
      <div className={classes['info-and-button-container']}>
        <div className={classes['info-container']}>
          <div className={classes['check-circle'] + ' ' + classes['expand-then-shrink']}>
            <FaTimes
              size={44}
              className={classes['expand-then-shrink']}
              color="#EA2B2B"
            ></FaTimes>
          </div>
          <div className={classes['text-container']}>
            <div className={classes['main-text']}>Không chính xác</div>
            <div className={classes['sub-text']}>Đáp án đúng: "{props.correctAnswer}"</div>
          </div>
        </div>
        <Button
          variant="danger"
          size="lg"
          className={classes["button"] + " " + classes["danger-button"]}
          onClick={loadNextExercise}
        >
          Tiếp tục
        </Button>
      </div>
    </div>
  );
}

const UnansweredFooter = props => {
  const { answered } = props;
  return (
    <div className={classes["unanswered-footer"]}>
      <div className={classes["line"]}></div>
      <div className={classes["unanswered"]}>
        <div className={classes["buttons-container"]}>
          <Button
            variant="outline-secondary"
            size="lg"
            className={classes["button"] + " " + classes["secondary-button"]}
            onClick={props.handleCheckClick}
          >
            Bỏ qua
          </Button>
          {answered === "typing" ? (
            <Button
              variant="success"
              size="lg"
              className={classes["button"] + " " + classes["success-button"]}
              onClick={props.handleCheckClick}
            >
              Kiểm tra
            </Button>
          ) : (
            <Button
              disabled
              variant="secondary"
              size="lg"
              className={classes["button"] + " " + classes["disabled-button"]}
            >
              Kiểm tra
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercise;
