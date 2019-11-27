import React, { useState, useEffect } from "react";
import classes from "./ExerciseDetail.module.scss";
import uuid from "uuid";
import {
  vieEngPictureSelecting,
  engVieSentenceTranslating,
  vieEngSentenceMaking,
  vieEngSentenceSelecting
} from "../mock-exercises";

const ExerciseDetail = props => {
  const { exercise, handleAnswerChange, userAnswer } = props;

  const sendAnswer = answer => {
    handleAnswerChange(answer);
  };

  const renderExercise = () => {
    switch (exercise.type) {
      case vieEngPictureSelecting:
        return (
          <VieEngPictureSelecting
            exercise={exercise}
            userAnswer={userAnswer}
            sendAnswer={sendAnswer}
          />
        );
      case vieEngSentenceSelecting:
        return (
          <VieEngSentenceSelecting
            exercise={exercise}
            userAnswer={userAnswer}
            sendAnswer={sendAnswer}
          />
        );
      case vieEngSentenceMaking:
        return (
          <VieEngSentenceMaking
            exercise={exercise}
            userAnswer={userAnswer}
            sendAnswer={sendAnswer}
          />
        );
      case engVieSentenceTranslating:
        return (
          <EngVieSentenceTranslating
            exercise={exercise}
            userAnswer={userAnswer}
            sendAnswer={sendAnswer}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={classes["exercise-detail-container"]}>
      <div className={classes["requirement"]}>{exercise.requirement}</div>
      <div className={classes["question"]}>
        {exercise.question ? exercise.question : ""}
      </div>
      <div className={classes["exercise-detail"]}>{renderExercise()}</div>
    </div>
  );
};

const EngVieSentenceTranslating = props => {
  const { exercise, userAnswer, sendAnswer } = props;

  const handleChange = event => {
    sendAnswer(event.target.value)
  }

  return (
    <div className={classes["sentence-translating-container"]}>
      <textarea
        className={classes['input']}
        value={userAnswer}
        onChange={handleChange}
      />
    </div>
  );
};

const VieEngSentenceMaking = props => {
  const [answerSentence, setAnswerSentence] = useState([]);
  const { exercise, userAnswer, sendAnswer } = props;

  const wordsToPickList = Array.from(exercise.wordsToPick, (word, index) => ({
    id: index,
    word: word
  }));

  const isWordInAnswerSentence = wordToCheck => {
    return answerSentence.findIndex(word => word.id === wordToCheck.id) !== -1;
  };

  const pushWordToAnswerSentence = nWord => {
    if (isWordInAnswerSentence(nWord)) {
      return;
    }
    setAnswerSentence([...answerSentence, nWord]);
    // setTimeout(() => {console.log(answerSentence);}, 5000);
    // console.log(answerSentence);

    // let newUserAnswer = userAnswer;
    // newUserAnswer += newUserAnswer === "" ? nWord.word : " " + nWord.word;
    // sendAnswer(newUserAnswer);
    // sendAnswer(newUserAnswer);
  };

  const deleteWordFromAnswerSentence = wordToDelete => {
    setAnswerSentence(
      answerSentence.filter(word => word.id !== wordToDelete.id)
    );
    console.log(answerSentence);
    // sendAnswer(createStringFromAnswerSentence());
  };

  useEffect(() => {
    sendAnswer(createStringFromAnswerSentence());
  }, [answerSentence])

  const createStringFromAnswerSentence = () => {
    let str = "";
    for(let wordObj of answerSentence) {
      str = str + wordObj.word + " ";
    }
    console.log(`"${str}"`)
    return str.slice(0, str.length - 1);
  }

  return (
    <div className={classes["sentence-making-container"]}>
      <div className={classes["line"] + " " + classes["line-1"]} />
      <div className={classes["line"] + " " + classes["line-2"]} />
      <div className={classes["answer-sentence-container"]}>
        {answerSentence.map(wordObj => (
          <div
            className={classes["word-container"]}
            onClick={deleteWordFromAnswerSentence.bind(this, wordObj)}
          >
            {wordObj.word}
          </div>
        ))}
      </div>
      <div className={classes["words-to-pick-container"]}>
        {wordsToPickList.map(wordObj => (
          <div
            key={wordObj.id}
            className={
              classes["word-container"] +
              (isWordInAnswerSentence(wordObj)
                ? " " + classes["picked-word"]
                : "")
            }
            onClick={pushWordToAnswerSentence.bind(this, wordObj)}
          >
            {wordObj.word}
          </div>
        ))}
      </div>
    </div>
  );
};

const VieEngPictureSelecting = props => {
  const { exercise, userAnswer, sendAnswer } = props;
  return (
    <div className={classes["picture-selecting-container"]}>
      {exercise.imagesToPick.map(({ index, word, imgUrl }) => (
        <div
          className={
            classes["picture-and-info-container"] +
            " " +
            classes["hover-zone"] +
            " " +
            classes["shrink-on-click"] +
            (word === userAnswer ? " " + classes["choosen-one"] : "")
          }
          onClick={sendAnswer.bind(this, word)}
        >
          <div className={classes["picture-container"]}>
            <img
              className={classes["picture"]}
              src={require(`../../../../assets/${imgUrl}`)}
              alt="illus"
            />
          </div>
          <div className={classes["answer-and-tab-number"]}>
            <div className={classes["answer"]}>{word}</div>
            <div className={classes["tab-number"]}>{index}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const VieEngSentenceSelecting = props => {
  const { exercise, userAnswer, sendAnswer } = props;
  return (
    <div className={classes["sentence-selecting-container"]}>
      {exercise.choices.map((choice, index) => (
        <div
          className={
            classes["choice-container"] +
            " " +
            classes["hover-zone"] +
            " " +
            classes["shrink-on-click"] +
            (choice === userAnswer ? " " + classes["choosen-one"] : "")
          }
          onClick={sendAnswer.bind(this, choice)}
        >
          <div className={classes["tab-number"]}>{index + 1}</div>
          <div className={classes["answer"]}>{choice}</div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseDetail;
