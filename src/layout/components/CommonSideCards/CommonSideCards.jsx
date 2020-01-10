import React from 'react';
import { Container, Button } from 'react-bootstrap';

import classes from './CommonSideCards.module.scss';

import { achivements } from '../../../mock-data';

function CommonSideCards(props) {
  // props
  // isFloatingCard
  // isHideAchievementCard

  const cardShadowStyle = {
    border: 'none',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 15px 5px rgba(0, 0, 0, 0.1)',
  }
  
  return (
    <>
      <div className={classes['outlined-card']} style={props.isFloatingCard === true ? cardShadowStyle : null}>
        <div className={classes['card-center']}>
          <img src="//d35aaqx5ub95lt.cloudfront.net/images/leagues/placeholder.svg" alt="Leages"/>
          <div className={classes['main-text']}>Mở khóa bảng xếp hạng</div>
          <div className={classes['sub-text']}>Hoàn thành thêm 5 bài học để bắt đầu thi đua</div>
        </div>
      </div>

      
      {/* Streak */}
      <div className={classes["frame"]} style={props.isFloatingCard === true ? cardShadowStyle : null}>
        <h2 className={classes["frame-title"]}>
          <span className={classes["title"]}>Mục tiêu mỗi ngày</span>
          <a href="/learn" className={classes["more"]}>Lên Lịch</a>
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
      <div className={`${props.isHideAchievementCard === true ? 'd-none' : ''} ${classes["frame"]}`} style={props.isFloatingCard === true ? cardShadowStyle : null}>
        <h2 className={classes["frame-title"]}>
          <span className={classes["title"]}>Thành tích</span>
          <a href="/profile/achievements" className={classes["more"]}>Xem thêm</a>
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
    </>
  );
}

export default CommonSideCards;