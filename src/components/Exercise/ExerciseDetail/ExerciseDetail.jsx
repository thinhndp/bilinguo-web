import React, { useState } from 'react';
import classes from './ExerciseDetail.module.scss';

const ExerciseDetail = (props) => {
  const { exercise, handleAnswerChange, userAnswer } = props;

  const sendAnswer = (answer) => {
    handleAnswerChange(answer);
  }

  return (
    <div className={classes['exercise-detail-container']}>
      <div className={classes['requirement']}>{exercise.requirement}</div>
      <div className={classes['question']}>{exercise.question ? exercise.question : ""}</div>
      <div className={classes['exercise-detail']}>
        <div className={classes['pictures-selecting-container']}>
          {
            exercise.imagesToPick.map(({index, word, imgUrl}) => (
              <div
                className={
                  classes['picture-and-info-container'] + " " 
                  + classes['hover-zone'] + " " 
                  + classes['zoom-on-click']
                  + ( word === userAnswer ? " " + classes['choosen-one']: "")
                }
                onClick={sendAnswer.bind(this, word)}
              >
                <div className={classes['picture-container']}>
                  <img className={classes['picture']} src={require(`../../../assets/${imgUrl}`)} alt="illus"/>
                </div>
                <div className={classes['answer-and-tab-number']}>
                  <div className={classes['answer']}>{word}</div>
                  <div className={classes['tab-number']}>{index}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetail;