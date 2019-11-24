import React from "react";
import classes from "./Learn.module.scss";
import Exercise from '../Exercise/Exercise';
import { exerciseGroupLvl0, exerciseGroupLvl1, achivements } from "../../mock-data";

const Learn = props => {
  return (
    <div style={{ backgroundColor: "#ddd", zIndex: -2 }}>
      {/* <img
        className={classes["cai-anh-dang-sau"]}
        src={require("../../assets/field.png")}
        alt="field"
      /> */}
      {/* <div className={classes['cai-anh-dang-sau']}></div> */}
      <img
        className={classes["imgage"]}
        src={require("../../assets/field17edited.png")}
        alt="field"
      />
      <div className={classes["exercises-and-may-cai-ben-phai-container"]}>
        <div className={classes["exercises-container"]}>
          <Course courseData={exerciseGroupLvl0}></Course>
          <Course courseData={exerciseGroupLvl1}></Course>
        </div>
        <div className={classes["may-cai-ben-phai-container"]}>

          {/* Streak */}
          <div className={classes["frame"]}>
            <h2 className={classes["frame-title"]}>
              <span className={classes["title"]}>Mục tiêu mỗi ngày</span>
              <a className={classes["more"]}>Lên Lịch</a>
            </h2>
            <div className={classes["streak-container"]}>
              <div className={classes["streak-circle-container"]}>
                <div className={classes["streak-circle"]}>
                  <span style={{ lineHeight: "60px" }}>1</span>
                  <span className={classes["sub-text"]}>ngày</span>
                  <div className={classes["streak-logo"]}></div>
                </div>
              </div>
              <div className={classes["streak-goal-container"]}>
                <div className={classes["main-text"]}>10/10</div>
                <div className={classes["sub-text"]}>xp cần</div>
                <div className={classes["main-text"]}>23</div>
                <div className={classes["sub-text"]}>tiếng còn lại</div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className={classes["frame"]}>
            <h2 className={classes["frame-title"]}>
              <span className={classes["title"]}>Thành tích</span>
              <a className={classes["more"]}>Xem thêm</a>
            </h2>
            <div className={classes["achievements-container"]}>
              { achivements.map(achivement => (
                <div className={classes['one-achievement-container']}>
                  <div
                    style={{ background: `url(${achivement.iconUrl}) no-repeat`, backgroundSize: "contain" }}
                    className={classes['achievement-icon']}
                  ></div>
                  <div className={classes['star-container'] + ' ' + classes['star-1']}>
                    <div className={classes['black-star']}></div>
                    { achivement.star > 0 ?
                      <div className={classes['gold-star']}></div>
                      : null
                    }
                  </div>
                  <div className={classes['star-container'] + ' ' + classes['star-2']}>
                    <div className={classes['black-star']}></div>
                    { achivement.star > 1 ?
                      <div className={classes['gold-star']}></div>
                      : null
                    }
                  </div>
                  <div className={classes['star-container'] + ' ' + classes['star-3']}>
                    <div className={classes['black-star']}></div>
                    { achivement.star > 2 ?
                      <div className={classes['gold-star']}></div>
                      : null
                    }
                  </div>
                </div>
              )) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Course = props => {
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
            <div className={classes["exercise-container"]}>
              <div className={classes["exercise-illustration"]}>
                <div
                  className={classes["exercise-background-circle"]}
                  style={{ backgroundColor: exercise.backgroundColor }}
                >
                  <img
                    className={classes["exercise-icon"]}
                    src={require("../../assets/" + exercise.unlockedIconUrl)}
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

export default Learn;
