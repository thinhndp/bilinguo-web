import React, { useState } from 'react';
import { Badge, Button, Container, Dropdown } from 'react-bootstrap';
import InputRange from 'react-input-range';

import classes from './PageTutors.module.scss';

import MyNavbar from '../../components/MyNavbar/MyNavbar';
import SelectAvailability from './components/SelectAvailability/SelectAvailability';
import FilterTutors from './components/FilterTutors/FilterTutors';

const TUTORS = [
  {
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
  },
  {
    name: 'Olga U.',
    photoURL: 'https://avatars.preply.com/i/logos/i/logos/858219.03cd73d8f8.jpg?d=160x160&f=jpeg',
    nation: {
      name: 'Ukraine',
      flagPhotoURL: '//static.preply.com/images/new/flags-svg/4x3/ua.svg',
    },
    totalActiveStudents: 22,
    totalLessons: 257,
    languages: [
      {
        name: 'Ukrainian',
        level: 'Native',
      },
      {
        name: 'English',
        level: 'C2',
      },
      {
        name: 'Russian',
        level: 'C2',
      },
    ],
    description: {
      brief: 'English tutor who will make you love studying it',
      detail: 'I am a passionate English tutor who is in love with my job. I promise you high quality lessons with a lot of fun and useful stuff!',
    },
    review: {
      star: 5,
      totalReviews: 5,
    },
    pricePerHour: 15,
  },
  {
    name: 'Marianna D.',
    photoURL: 'https://avatars.preply.com/i/logos/i/logos/163038.dab1408014.jpg?d=160x160&f=jpeg',
    nation: {
      name: 'Russian',
      flagPhotoURL: '//static.preply.com/images/new/flags-svg/4x3/ru.svg',
    },
    totalActiveStudents: 55,
    totalLessons: 568,
    languages: [
      {
        name: 'Russian',
        level: 'Native',
      },
      {
        name: 'English',
        level: 'C2',
      },
      {
        name: 'Spanish',
        level: 'A1',
      },
    ],
    description: {
      brief: 'Certified TESOL English Teacher with 8 Years Experience. Your success is achievable!',
      detail: 'My professional approach will help you greatly improve your communication skills, enrich your vocabulary, reduce your accent and more.',
    },
    review: {
      star: 4.9,
      totalReviews: 20,
    },
    pricePerHour: 20,
  },
  {
    name: 'Jeff L.',
    photoURL: 'https://avatars.preply.com/i/logos/i/logos/avatar_hdrde.jpg?d=160x160&f=jpeg',
    nation: {
      name: 'USA',
      flagPhotoURL: '//static.preply.com/images/new/flags-svg/4x3/us.svg',
    },
    totalActiveStudents: 55,
    totalLessons: 568,
    languages: [
      {
        name: 'English',
        level: 'Native',
      },
      {
        name: 'Spanish',
        level: 'Native',
      },
    ],
    description: {
      brief: 'CELTA-Certified, IELTS, Cambridge Assessment examiner',
      detail: `A proven teacher with great reviews, a top score, and over 1100 classes on Preply! I've put a lot of thought into my product and the results speak for themselves - let's get to work!`,
    },
    review: {
      star: 4.9,
      totalReviews: 25,
    },
    pricePerHour: 29,
  },
  
  {
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
  },
  {
    name: 'Olga U.',
    photoURL: 'https://avatars.preply.com/i/logos/i/logos/858219.03cd73d8f8.jpg?d=160x160&f=jpeg',
    nation: {
      name: 'Ukraine',
      flagPhotoURL: '//static.preply.com/images/new/flags-svg/4x3/ua.svg',
    },
    totalActiveStudents: 22,
    totalLessons: 257,
    languages: [
      {
        name: 'Ukrainian',
        level: 'Native',
      },
      {
        name: 'English',
        level: 'C2',
      },
      {
        name: 'Russian',
        level: 'C2',
      },
    ],
    description: {
      brief: 'English tutor who will make you love studying it',
      detail: 'I am a passionate English tutor who is in love with my job. I promise you high quality lessons with a lot of fun and useful stuff!',
    },
    review: {
      star: 5,
      totalReviews: 5,
    },
    pricePerHour: 15,
  },
  {
    name: 'Marianna D.',
    photoURL: 'https://avatars.preply.com/i/logos/i/logos/163038.dab1408014.jpg?d=160x160&f=jpeg',
    nation: {
      name: 'Russian',
      flagPhotoURL: '//static.preply.com/images/new/flags-svg/4x3/ru.svg',
    },
    totalActiveStudents: 55,
    totalLessons: 568,
    languages: [
      {
        name: 'Russian',
        level: 'Native',
      },
      {
        name: 'English',
        level: 'C2',
      },
      {
        name: 'Spanish',
        level: 'A1',
      },
    ],
    description: {
      brief: 'Certified TESOL English Teacher with 8 Years Experience. Your success is achievable!',
      detail: 'My professional approach will help you greatly improve your communication skills, enrich your vocabulary, reduce your accent and more.',
    },
    review: {
      star: 4.9,
      totalReviews: 20,
    },
    pricePerHour: 20,
  },
  {
    name: 'Jeff L.',
    photoURL: 'https://avatars.preply.com/i/logos/i/logos/avatar_hdrde.jpg?d=160x160&f=jpeg',
    nation: {
      name: 'USA',
      flagPhotoURL: '//static.preply.com/images/new/flags-svg/4x3/us.svg',
    },
    totalActiveStudents: 55,
    totalLessons: 568,
    languages: [
      {
        name: 'English',
        level: 'Native',
      },
      {
        name: 'Spanish',
        level: 'Native',
      },
    ],
    description: {
      brief: 'CELTA-Certified, IELTS, Cambridge Assessment examiner',
      detail: `A proven teacher with great reviews, a top score, and over 1100 classes on Preply! I've put a lot of thought into my product and the results speak for themselves - let's get to work!`,
    },
    review: {
      star: 4.9,
      totalReviews: 25,
    },
    pricePerHour: 29,
  },
]

function PageTutors() {
  // const [priceFilterValue, setPriceFilterValue] = useState({min: 1, max: 40})
  
  const renderTutorCards = () => {
    return TUTORS.map(tutor => (
      <div className={classes['filled-card']} style={{ marginBottom: 30 }}>
        <div className={classes['tutor-card-content']}>
          <div className="row">
            <div className="col-12 col-md-2">
              <div style={{ textAlign: 'center' }}>
                <img src={tutor.photoURL} alt="Tutor" className={classes['tutor-photo']} />
              </div>
            </div>

            <div className="col-12 col-md-7">
              <div className={classes['tutor-name']}>
                <a href="/tutors/123">{tutor.name}</a>
                <img src={tutor.nation.flagPhotoURL} alt={tutor.nation.name} className={classes['tutor-country-logo']} />
              </div>
              <div className={classes['tutor-info']}>
                <span className={classes['tutor-info-strong']}>
                  <i className="fas fa-user"></i> {tutor.totalActiveStudents} học viên
                </span>
                <span className={classes['separate-letter']}>&bull;</span>
                <span className={classes['tutor-info-strong']}>
                  {tutor.totalLessons} bài học
                </span>
                <span className={classes['separate-letter']}>&bull;</span>
                <span style={{ fontWeight: 'bold', marginRight: 5 }}>
                  Ngôn ngữ:
                </span>
                {tutor.languages.map((language, index) => (
                  <>
                    <span>
                      {language.name}
                      <Badge
                        variant={language.level === 'Native' ? 'success' : 'primary'}
                        style={{ marginLeft: 3 }}
                      >{language.level}</Badge>
                    </span>
                    {index !== tutor.languages.length - 1 ? <span className={classes['separate-letter']}>&middot;</span> : null}
                  </>
                ))}
              </div>
              <div className={classes['tutor-description']}>
                <span className={classes['tutor-description-brief']}>
                  {tutor.description.brief}
                </span>
                <span className={classes['separate-letter']}>-</span>
                <span className={classes['tutor-description-detail']}>
                  {tutor.description.detail}
                </span>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className={classes['book-info-container']}>
                <div className="row">
                  <div className="col-6">
                    <div>
                      <span><i className="fas fa-star" style={{ color: '#FBF227' }}></i></span>
                      <span className={classes['info-big-number']}>
                        {tutor.review.star}
                      </span>
                    </div>
                    <div>{tutor.review.totalReviews} reviews</div>
                  </div>
                  <div className="col-6">
                    <div>
                      <span>$</span>
                      <span className={classes['info-big-number']}>
                        {tutor.pricePerHour}
                      </span>
                    </div>
                    <div>mỗi giờ</div>
                  </div>
                </div>
              </div>
              <Button variant="success" size="lg" style={{  }} className={classes['book-info-btn']}>Chi tiết</Button>
              <Button variant="secondary" size="lg" style={{ color: '#1cb0f6' }} className={classes['book-info-btn']}>Gửi tin nhắn</Button>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <MyNavbar />
      <Container className={classes['page-content-container']}>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className={classes['section-title']}>Gia sư tiếng Anh</div>
            <div className={`d-none d-lg-block ${classes['outlined-card']}`} style={{ marginBottom: 40 }}>
              <div className={classes['availability-card-content']}>
                <div className={classes['availability-photo-container']}>
                  <img src="https://cdn.verbling.com/static/svg/icons8/6034456424385c3abd2120cadd14fe28.icons8-calendar_plus.svg" alt="Availability"/>
                </div>
                <div className={classes['availability-content-container']}>
                  <div className={classes['availability-title']}>Bạn rảnh vào khung giờ nào?</div>
                  <div className={classes['availability-description']}>Cập nhật thời gian rảnh của bạn để hệ thống chọn ra những gia sư thích hợp nhất!</div>
                  <Button variant="primary" size="md" style={{ padding: '10px 40px', fontSize: 18 }} className={classes['asd']}>Cập nhật</Button>
                </div>
              </div>
            </div>

            <div className="d-block d-lg-none" style={{ marginBottom: 20 }}>
              <FilterTutors />
            </div>

            {renderTutorCards()}
          </div>

          <div className="d-none d-lg-block col-4">
            <FilterTutors />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PageTutors;