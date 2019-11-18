import React from 'react';
import classes from './Learn.module.scss';

const Learn = (props) => {
  return (
    <div className={classes['exercises-and-may-cai-ben-phai-container']}>
      <div className={classes['exercises-container']}>a</div>
      <div className={classes['may-cai-ben-phai-container']}>
        <div className={classes['daily-goal-container']}>
          <h2 className={classes['daily-goal-title']}>
            <span style={{ display: "table-cell" }}>Mục tiêu ngày</span>
            <a style={{ float: "right" }}>Thay đổi</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Learn;