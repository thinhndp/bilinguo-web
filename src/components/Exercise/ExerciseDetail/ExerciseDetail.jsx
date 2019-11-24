import React from 'react';
import classes from './ExerciseDetail.module.scss';

const ExerciseDetail = (props) => {
  const { exercise } = props;
  return (
    <div className={classes['exercise-detail-container']}>
      <div className={classes['requirement']}>{exercise.requirement}</div>
      <div className={classes['question']}>{exercise.question ? exercise.question : 'Tôi là con bò'}</div>
      <div className={classes['exercise-detail']}>
        <div className={classes['pictureSelectingContainer']}>
          <div className={classes['pictureContainer']}></div>
          <div className={classes['pictureContainer']}></div>
          <div className={classes['pictureContainer']}></div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetail;