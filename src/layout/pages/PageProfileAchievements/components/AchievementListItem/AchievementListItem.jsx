import React from 'react';

import classes from './AchievementListItem.module.scss';

function AchievementListItem(props) {
  return (
    <div className={classes['achievement']}>
      <div className={classes['achievement-icon']} style={{ background: `url(${props.iconUrl}) no-repeat`, backgroundSize: "contain" }}>
        <div className={classes['achievement-stars']}>
          <div className={classes['achievement-star-one']}>
            <div className={classes['black-star']}></div>
            {
              props.star >= 1
                ? <div className={classes['gold-star']}></div>
                : null
            }
          </div>
          <div className={classes['achievement-star-two']}>
            <div className={classes['black-star']}></div>
            {
              props.star >= 2
                ? <div className={classes['gold-star']}></div>
                : null
            }
          </div>
          <div className={classes['achievement-star-three']}>
            <div className={classes['black-star']}></div>
            {
              props.star >= 3
                ? <div className={classes['gold-star']}></div>
                : null
            }
          </div>
        </div>
      </div>
      <div className={classes['achievement-detail']}>
        <div className={classes['achievement-detail-name']}>
          {props.name}
        </div>
        <div className={classes['achievement-detail-description']}>
          {props.description}
        </div>
        <div className={classes['achievement-detail-progressbar']}>
        {props.currentProgress}/{props.totalProgress}
        </div>
      </div>
    </div>
  );
}

export default AchievementListItem;