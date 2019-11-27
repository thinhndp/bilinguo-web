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
              onClick={handleExerciseClick}
            >
              <div className={classes["exercise-illustration"]}>
                <div
                  className={classes["exercise-background-circle"]}
                  style={{ backgroundColor: exercise.backgroundColor }}
                >
                  <img
                    className={classes["exercise-icon"]}
                    src={require("../../../../assets/" + exercise.unlockedIconUrl)}
                    alt="logo"
                  ></img>
                </div>
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
              </div>
              <div className={classes["exercise-name"]}>{exercise.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Course;