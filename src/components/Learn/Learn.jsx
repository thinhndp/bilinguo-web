import React from 'react';
import classes from './Learn.module.scss';

const Learn = (props) => {
  return (
    <div className={classes['exercises-and-may-cai-ben-phai-container']}>
      <div className={classes['exercises-container']}>a</div>
      <div className={classes['may-cai-ben-phai-container']}>
        <div className={classes['daily-goal-container']}>
          <h2 className={classes['daily-goal-title']}>
            <span className={classes['title']}>Mục tiêu ngày</span>
            <a className={classes['change-goal']}>Thay đổi</a>
          </h2>
          <div className={classes['streak-container']}>
            <div className={classes['streak-circle-container']}>
              <div className={classes['streak-circle']}>
                <span>1</span>
                <span className={classes['sub-text']}>ngày</span>
              </div>
            </div>
            <div className={classes['streak-goal-container']}>
              <div className={classes['main-text']}>10/10</div>
              <div className={classes['sub-text']}>xp cần</div>
              <div className={classes['main-text']}>23</div>
              <div className={classes['sub-text']}>tiếng còn lại</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;