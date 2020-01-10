import React from 'react';
import { Container, Button } from 'react-bootstrap';

import classes from './AchievementSideCard.module.scss';

import CommonSideCards from '../../../../components/CommonSideCards/CommonSideCards';

function AchievementSideCard(props) {
  // props
  // isFloatingCard

  const cardShadowStyle = {
    border: 'none',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 15px 5px rgba(0, 0, 0, 0.1)',
  }
  
  return (
    <>
      <div className={classes['card-section']} style={{ marginBottom: 20 }}>
        <div className={classes['card-section-title']}>
          Ngôn ngữ
        </div>
        <div className={classes['card-section-content']}>
          <div className={classes['language-summary']}>
            <div className={classes['language-summary-flag']}>
              <img src={require('../../../../../assets/flags/flag-american.png')} alt="English"/>
            </div>
            <div className={classes['language-summary-detail']}>
              <div className={classes['language-summary-detail-title']}>
                Tiếng Anh
              </div>
              <div className={classes['language-summary-detail-description']}>
                Tổng điểm KN: 95KN
              </div>
            </div>
          </div>
        </div>
      </div>

      <CommonSideCards isHideAchievementCard={true} />
    </>
  );
}

export default AchievementSideCard;