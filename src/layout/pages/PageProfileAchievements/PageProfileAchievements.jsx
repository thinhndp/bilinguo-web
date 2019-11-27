import React from 'react';
import { Container } from 'react-bootstrap';

import classes from './PageProfileAchievements.module.scss';

import AchievementList from './components/AchievementList/AchievementList';
import MyNavbar from '../../components/MyNavbar/MyNavbar';

function PageProfileAchievements() {
  // const [toggler, setToggler] = useState(false);
  return (
    <div>
      <MyNavbar />
      <Container className={classes['page-content-container']}>
        <div className="row">
          <div className="col-8">
            <div className={classes['anhdaidien-va-ten']}>
              <div className={classes['avatar-container']}>
                <img
                  src={require('../../../assets/anonymous-avatar.jpg')}
                  className={classes['avatar']}
                  alt="Avatar" />
                <div className={classes['avatar-btn-edit']}>
                  <i className="fas fa-pencil-alt"></i>
                </div>
              </div>
              <div className={classes['username-container']}>
                <a href="/" className={classes['username']}>
                  Hoan Nguyen
                </a>
                <div className={classes['email']}>
                hoannc@uit.edu.vn
                </div>
              </div>
            </div>

            <div className={classes['achievements-container']}>
              <div className={classes['section-title']}>Thành tích</div>
              <AchievementList />
            </div>
          </div>
          <div className="col-4">
            <div className={classes['card-section']}>
              <div className={classes['card-section-title']}>
                Ngôn ngữ
              </div>
              <div className={classes['card-section-content']}>
                <div className={classes['language-summary']}>
                  <div className={classes['language-summary-flag']}>
                    <img src={require('../../../assets/flags/flag-american.png')} alt="English"/>
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
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PageProfileAchievements;