import React from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Course.module.scss';

const Course = props => {
  let history = useHistory();
  const handleExerciseClick = () => {
    history.push("/exercise");
  }
  return (
    <div className={classes["course"]}>
      {props.courseData.level > 0 ? (
        <div className={classes["divider"]}>
          <div className={classes["line"]}></div>
          <div className={classes["icon-container"]}>
            <img
              className={classes["icon"]}
              src="//d35aaqx5ub95lt.cloudfront.net/images/checkpoint-castle-complete.svg"
              alt="milestone"
            />
            <div className={classes["level"]}>{props.courseData.level}</div>
          </div>
          <div className={classes["line"]}></div>
        </div>
      ) : null}
      {props.courseData.rows.map(row => (
        <div className={classes["course-row"]}>
          {row.map(exercise => (
            <div
              className={classes["exercise-container"]}
              onClick={exercise.isUnlocked ? handleExerciseClick : null}
            >
              <div className={classes["exercise-illustration"]}>
                <div
                  className={classes["exercise-background-circle"]}
                  style={{ backgroundColor: exercise.isUnlocked ? exercise.backgroundColor : "#eee" }}
                >
                  <img
                    className={exercise.isUnlocked ? classes["exercise-icon"] : classes["locked-exercise-icon"]}
                    src={require("../../../../assets/" +  (exercise.isUnlocked ? exercise.unlockedIconUrl : exercise.lockedIconUrl))}
                    alt="logo"
                  ></img>
                  {/* <img
                  className={classes["exercise-icon"] + " " + exercise.isUnlocked ? classes["unlocked-exercise-icon"] : ""}
                    src={require("../../../../assets/" + exercise.isUnlocked ? exercise.unlockedIconUrl : exercise.lockedIconUrl)}
                    alt="logo"
                  ></img> */}
                </div>
                {
                  exercise.isUnlocked ?
                    <div className={classes["honey-you-should-see-me-in-a-crown"]}>
                      <img
                        src="//d35aaqx5ub95lt.cloudfront.net/images/juicy-crown.svg"
                        alt="crown"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div className={classes["level-reached"]}>
                        {exercise.levelReached}
                      </div>
                    </div>
                  : null}
              </div>
              <div className={exercise.isUnlocked ? classes["exercise-name"] : classes["locked-exercise-name"]}>{exercise.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Course;