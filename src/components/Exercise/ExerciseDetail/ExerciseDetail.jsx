import React, { useState } from "react";
import classes from "./ExerciseDetail.module.scss";
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
    switch (exercise.id) {
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

const VieEngSentenceMaking = props => {
  const { exercise, userAnswer, sendAnswer } = props;
  return (
    <div className={classes["sentence-making-container"]}>
      <div className={classes["line"] + " " + classes["line-1"]} />
      <div className={classes["line"] + " " + classes["line-2"]} />
      <div className={classes["answer-sentence-container"]}>
        {
          [].map(word => (
            <div className={classes["word-container"]}>
              {word}
            </div>
          ))
        }
      </div>
      <div className={classes["words-to-pick-container"]}>
        {
          exercise.wordsToPick.map(word => (
            <div className={classes["word-container"]}>
              {word}
            </div>
          ))
        }
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
            classes["zoom-on-click"] +
            (word === userAnswer ? " " + classes["choosen-one"] : "")
          }
          onClick={sendAnswer.bind(this, word)}
        >
          <div className={classes["picture-container"]}>
            <img
              className={classes["picture"]}
              src={require(`../../../assets/${imgUrl}`)}
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
          className={classes["choice-container"] + " " + classes["hover-zone"] + " " + classes["shrink-on-click"] +
            (choice === userAnswer ? " " + classes["choosen-one"] : "")}
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
