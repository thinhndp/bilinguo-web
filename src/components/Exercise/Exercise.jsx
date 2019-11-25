import React, { useState } from "react";
import classes from "./Exercise.module.scss";
import { FaTimes, FaCheck } from "react-icons/fa";
import { Line } from "rc-progress";
import { Button } from "react-bootstrap";
import ExerciseDetail from './ExerciseDetail/ExerciseDetail';
import { exerciseList } from './mock-exercises';

const Exercise = () => {
  const [answered, setAnswered] = useState("unanswered");
  const [userAnswer, setUserAnswer] = useState("");
  const [curExercise, setCurExercise] = useState(exerciseList[1]);

  const makeTyping = () => {
    if (answered !== "typing") {
      setAnswered("typing");
    } else {
      setAnswered("unanswered");
    }
  };

  const makeCorrect = () => {
    if (answered !== "correct") {
      setAnswered("correct");
    } else {
      setAnswered("unanswered");
    }
  };

  const makeIncorrect = () => {
    if (answered !== "incorrect") {
      setAnswered("incorrect");
    } else {
      setAnswered("unanswered");
    }
  };

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

  const handleCheckClick = () => {
    if (userAnswer === curExercise.answers[0]) {
      setAnswered("correct");
    }
    else {
      setAnswered("incorrect");
    }
  }

  return (
    <div style={{ height: "100vh" }}>
      {/* <div>Test: {userAnswer}</div> */}
      <div className={classes["container"]}>
        <div className={classes["header"]}>
          <div className={classes["progress-bar-container"]}>
            <div className={classes["close-button"]}>
              <FaTimes size={28} color="#bbbbbb"></FaTimes>
            </div>
            <div className={classes["progress-bar"]}>
              <Line
                percent={50}
                strokeWidth="2"
                trailWidth="2"
                strokeColor="#1CB0F6"
                trailColor="#eeeeee"
              ></Line>
            </div>
          </div>
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
              <CorrectFooter answered={answered} />
              : ( answered === "incorrect" ? 
                    <IncorrectFooter answered={answered} correctAnswer={curExercise.answers[0]} />
                    : <UnansweredFooter answered={answered} handleCheckClick={handleCheckClick} />
                )
          }
        </div>
      </div>
    </div>
  );
};

const CorrectFooter = props => {
  const { answered } = props;
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
        >
          Tiếp tục
        </Button>
      </div>
    </div>
  );
}

const IncorrectFooter = props => {
  const { answered } = props;
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
