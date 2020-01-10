import React, { useState } from 'react';
import { Badge, Button, Container, Dropdown } from 'react-bootstrap';
import YouTube from 'react-youtube';

import classes from './PageTutorDetail.module.scss';

import MyNavbar from '../../components/MyNavbar/MyNavbar';
import RatingBadge from './components/RatingBadge/RatingBadge';

const TUTOR_DETAIL = {
  name: 'David Alexander P.',
  photoURL: 'https://avatars.preply.com/i/logos/i/logos/909693.8e6ea19f04.jpg?d=160x160&f=jpeg',
  nation: {
    name: 'USA',
    flagPhotoURL: '//static.preply.com/images/new/flags-svg/4x3/us.svg',
  },
  totalActiveStudents: 18,
  totalLessons: 178,
  languages: [
    {
      name: 'English',
      level: 'Native',
    },
    {
      name: 'Spanish',
      level: 'B1',
    },
  ],
  description: {
    brief: 'Expert Pronunciation and',
    detail: 'Finally get that "American Sound" that has eluded you for so long. Over half a century of native Californian speaking experience!',
  },
  review: {
    star: 5,
    totalReviews: 14,
  },
  pricePerHour: 24,
  ratingsDetail: [
    {
      name: 'Vui tính',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/fa6792c5a1d451b086dcc62f99045d41.icons8-confetti.svg',
      number: 75,
      color: '#ffb300'
    },
    {
      name: 'Tài liệu tuyệt vời',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/f4dbbe903c75d43d6bdef671260c9b7f.icons8-versions.svg',
      number: 63,
      color: '#2196f3'
    },
    {
      name: 'Nói chuyện hay',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/d05053c2423772df7def7262b90fd47c.icons8-chat.svg',
      number: 73,
      color: '#1565c0'
    },
    {
      name: 'Bài kiểm tra hay',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/1946975f7fb1d117c94bde719bcdea8a.icons8-diploma_1.svg',
      number: 12,
      color: '#5c6bc0'
    },
    {
      name: 'Chuyên nghiệp',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/29952406d8949e57b7ac5aaf568776f0.icons8-briefcase.svg',
      number: 12,
      color: '#e65100'
    },
    {
      name: 'Thân thiện với trẻ',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/f08c5eb33c57d5b9c426e45bd945dfe4.icons8-brick.svg',
      number: 12,
      color: '#ff3d00'
    },
    {
      name: 'Luyện viết tốt',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/8bcafe5cb32ed6ceae914411fbed49c2.icons8-blog.svg',
      number: 19,
      color: '#ffb300'
    },
    {
      name: 'Tốt cho người mới',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/6aefc700212f38e8561288e2eeb0e7ab.icons8-for_beginner.svg',
      number: 12,
      color: '#388e3c'
    },
    {
      name: 'Tốt cho người khá',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/6aefc700212f38e8561288e2eeb0e7ab.icons8-for_beginner.svg',
      number: 45,
      color: '#388e3c'
    },
    {
      name: 'Tốt cho người giỏi',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/4f7d70c74a0ed15c3189ee24491bf249.icons8-for_experienced.svg',
      number: 15,
      color: '#e91e63'
    },
    {
      name: 'Luyện nói hiệu quả',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/4cfcc05a284ad6a0f619f290ae465819.icons8-voice_recognition_scan.svg',
      number: 28,
      color: '#2196f3'
    },
    {
      name: 'Bậc thầy ngữ pháp',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/8f36daab5dc454758e7db272aad83348.icons8-language.svg',
      number: 33,
      color: '#2196f3'
    },
    {
      name: 'Hiểu biết văn hóa',
      photoURL: 'https://cdn.verbling.com/static/svg/icons8/1f533b878b5d9d3ae214d2485afbe91d.icons8-handshake.svg',
      number: 25,
      color: '#4caf50'
    },
  ]
}

function PageTutorDetail() {
  
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  const renderRatingsDetail = () => {
    return TUTOR_DETAIL.ratingsDetail.map((ratingDetail, index) => (
      <RatingBadge
        key={`rating-badge-${index}`}
        color={ratingDetail.color}
        photoURL={ratingDetail.photoURL}
        number={ratingDetail.number}
        name={ratingDetail.name}
      />
    ));
  }
  
  return (
    <div>
      <MyNavbar />
      <Container className={classes['page-content-container']}>
        <div className="row">
          <div className="col-12 col-md-8">
            <div className={classes['tutor-card']}>
              <div className={classes['card-header']}>
                <div className={classes['avatar-container']}>
                  <img src={TUTOR_DETAIL.photoURL} alt={TUTOR_DETAIL.name} />
                </div>
                <div className={classes['info-container']}>
                  <div className={classes['name-and-subtitle-container']}>
                    <div className={classes['name']}>
                      {TUTOR_DETAIL.name} <img src={TUTOR_DETAIL.nation.flagPhotoURL} alt={TUTOR_DETAIL.nation.name} style={{ width: 24, borderRadius: 5 }} />
                    </div>
                    <div className={classes['subtitle']}>{TUTOR_DETAIL.description.brief}</div>
                  </div>
                  <div className={classes['detail-container']}>
                    <div className={classes['detail-item']}>
                      <div className={classes['icon']}>
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                      <strong style={{ marginRight: 5 }}>Dạy</strong> tiếng Anh
                    </div>
                    <div className={classes['detail-item']}>
                      <div className={classes['icon']}>
                        <i className="fas fa-comments"></i>
                      </div>
                      <strong style={{ marginRight: 5 }}>Nói</strong> tiếng Anh
                    </div>
                    <div className={classes['detail-item']}>
                      <div className={classes['icon']}>
                        <i className="fas fa-book"></i>
                      </div>
                      <strong style={{ marginRight: 5 }}>181</strong> bài giảng
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes['card-content']}>
                <div className={classes['section-title']}>Giới thiệu</div>
                <div className={classes['tutor-description']}>
                  Finally get that "American Sound" that has eluded you for so long. Over half a century of native Californian speaking experience!
                  <br></br>
                  <br></br>
                  I am an expert in teaching linguistic manipulation directly to students. My methods are proven, highly effective and fast - no matter from which country you originated from.
                  <br></br>
                  <br></br>
                  My methods venture into how our concepts -- our beliefs about learning a new language and our self-doubts -- can restrict and slow the attainment of new conversational rhythm patterns, which constitute the accent. With my guidance on how to overcome self-doubt and self-limiting beliefs, plus my methods in teaching how to improve our listening ability plus the use of advanced rhythm and mirroring techniques, you will - much sooner than you ever believed possible - sound more like a native speaker than a "learner of English."
                  <br></br>
                  <br></br>
                  I am confident in my teaching ability, quite friendly and outgoing, fun, yet challenging. I am for those who are serious only! This is not "Pronunciation Light," it's a skyrocket to success!
                </div>
                <hr></hr>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className={classes['subsection-title']}>Ưu tiên độ tuổi</div>
                    <ul className={classes['dashed-ul']}>
                      <li>Tiểu học (6-12)</li>
                      <li>Trung học (12-17)</li>
                      <li>Chưa tốt nghiệp (17-22)</li>
                      <li>Người lớn (23-40)</li>
                      <li>Người lớn (40+)</li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className={classes['subsection-title']}>Ưu tiên trình độ</div>
                    <ul className={classes['dashed-ul']}>
                      <li>Mới bắt đầu</li>
                      <li>Đã học qua</li>
                      <li>Khá giỏi</li>
                      <li>Nâng cao</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={`d-block d-md-none ${classes['buy-info-card']}`}>
              <YouTube
                videoId="8cifkpOHuZc"
                opts={opts}
                containerClassName={classes['video-container']}
              />
              <div className={classes['buy-info-content']}>
                <div className={classes['rating-and-price']}>
                  <div className="row">
                    <div className="col-6">
                      <div>
                        <span><i className="fas fa-star" style={{ color: '#FBF227' }}></i></span>
                        <span className={classes['info-big-number']}>
                          {TUTOR_DETAIL.review.star}
                        </span>
                      </div>
                      <div>{TUTOR_DETAIL.review.totalReviews} reviews</div>
                    </div>
                    <div className="col-6">
                      <div>
                        <span>$</span>
                        <span className={classes['info-big-number']}>
                          {TUTOR_DETAIL.pricePerHour}
                        </span>
                      </div>
                      <div>mỗi giờ</div>
                    </div>
                  </div>
                </div>

                <Button variant="success" size="lg" className={classes['book-info-btn']}>Đặt lịch</Button>
                <Button variant="secondary" size="lg" className={classes['book-info-btn']} style={{ color: '#1cb0f6' }}>Nhắn tin</Button>

                <div className={classes['sub-info']}>
                  <div className={classes['sub-info-item']}>
                    <div className={classes['icon-container']}>
                      <i className="fas fa-book" style={{ color: '#f8463d' }}></i>
                    </div>
                    <div className={classes['info-text']}>
                      <strong>12 lượt đặt trong 48 giờ qua</strong>
                    </div>
                  </div>
                  <div className={classes['sub-info-item']}>
                    <div className={classes['icon-container']}>
                      <i className="far fa-clock" style={{ color: '#50bf16' }}></i>
                    </div>
                    <div className={classes['info-text']} style={{ fontWeight: 500 }}>
                      Thường trả lời trong 3 giờ
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes['tutor-stat-card']}>
              <div className={classes['section-title']} style={{ color: '#fff' }}>Thống kê Gia sư</div>
              <div className="row">
                <div className="col-6 col-md-4">
                  <img className={classes['stat-icon']} src="https://cdn.verbling.com/static/svg/icons8/2501ea881e1c51e92314e3aef43239e9.icons8-watch.svg" alt="watch" />
                  <div className={classes['stat-name']}>Thời gian phản hồi</div>
                  <div className={classes['stat-description']}>Trong vòng vài giờ</div>
                </div>
                <div className="col-6 col-md-4">
                  <img className={classes['stat-icon']} src="https://cdn.verbling.com/static/svg/icons8/b16055ccbb1aa1c6004603fc1398b1bf.icons8-timetable.svg" alt="watch" />
                  <div className={classes['stat-name']}>Tham gia vào</div>
                  <div className={classes['stat-description']}>7 tháng trước</div>
                </div>
                <div className="col-6 col-md-4">
                  <img className={classes['stat-icon']} src="https://cdn.verbling.com/static/svg/icons8/8de190b7e45456ead78ae83b0c915c71.icons8-place_marker.svg" alt="watch" />
                  <div className={classes['stat-name']}>Tỷ lệ có mặt</div>
                  <div className={classes['stat-description']}>100%</div>
                </div>
                <div className="col-6 col-md-4">
                  <img className={classes['stat-icon']} src="https://cdn.verbling.com/static/svg/icons8/4b89995c24f5b6d7aceceb7b03b6dc51.icons8-class.svg" alt="watch" />
                  <div className={classes['stat-name']}>Số bài giảng</div>
                  <div className={classes['stat-description']}>Within a few hours</div>
                </div>
                <div className="col-6 col-md-4">
                  <img className={classes['stat-icon']} src="https://cdn.verbling.com/static/svg/icons8/38d16413384dca1d9b6ac986b757b2d2.icons8-class_blackboard.svg" alt="watch" />
                  <div className={classes['stat-name']}>Số bài mỗi học viên</div>
                  <div className={classes['stat-description']}>Trung bình 11.5 bài</div>
                </div>
                <div className="col-6 col-md-4">
                  <img className={classes['stat-icon']} src="https://cdn.verbling.com/static/svg/icons8/1b112af21214f4c6d5f040a701abe6ce.icons8-filled_star.svg" alt="watch" />
                  <div className={classes['stat-name']}>Đánh giá</div>
                  <div className={classes['stat-description']}>5.0</div>
                </div>
              </div>
            </div>

            <div className={classes['tutor-ratings-card']}>
              <div className={classes['section-title']}>Đánh giá</div>
              <div className={classes['rating-list-container']}>
                {renderRatingsDetail()}
              </div>
            </div>
          </div>

          <div className="d-none d-md-block col-4">
            <div className={classes['buy-info-card']}>
              <YouTube
                videoId="8cifkpOHuZc"
                opts={opts}
                containerClassName={classes['video-container']}
              />
              <div className={classes['buy-info-content']}>
                <div className={classes['rating-and-price']}>
                  <div className="row">
                    <div className="col-6">
                      <div>
                        <span><i className="fas fa-star" style={{ color: '#FBF227' }}></i></span>
                        <span className={classes['info-big-number']}>
                          {TUTOR_DETAIL.review.star}
                        </span>
                      </div>
                      <div>{TUTOR_DETAIL.review.totalReviews} reviews</div>
                    </div>
                    <div className="col-6">
                      <div>
                        <span>$</span>
                        <span className={classes['info-big-number']}>
                          {TUTOR_DETAIL.pricePerHour}
                        </span>
                      </div>
                      <div>mỗi giờ</div>
                    </div>
                  </div>
                </div>

                <Button variant="success" size="lg" className={classes['book-info-btn']}>Đặt lịch</Button>
                <Button variant="secondary" size="lg" className={classes['book-info-btn']} style={{ color: '#1cb0f6' }}>Nhắn tin</Button>

                <div className={classes['sub-info']}>
                  <div className={classes['sub-info-item']}>
                    <div className={classes['icon-container']}>
                      <i className="fas fa-book" style={{ color: '#f8463d' }}></i>
                    </div>
                    <div className={classes['info-text']}>
                      <strong>12 lượt đặt trong 48 giờ qua</strong>
                    </div>
                  </div>
                  <div className={classes['sub-info-item']}>
                    <div className={classes['icon-container']}>
                      <i className="far fa-clock" style={{ color: '#50bf16' }}></i>
                    </div>
                    <div className={classes['info-text']} style={{ fontWeight: 500 }}>
                      Thường trả lời trong 3 giờ
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

export default PageTutorDetail;