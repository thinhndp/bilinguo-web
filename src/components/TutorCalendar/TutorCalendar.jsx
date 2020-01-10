import React, { useState } from 'react';
import { Badge, Button, ButtonGroup, Container, Dropdown, Modal, OverlayTrigger, Tooltip, } from 'react-bootstrap';

import classes from './TutorCalendar.module.scss';

function TutorCalendar(props) {
  // props:
  // availableTimeList: [{ timeOfDayValue: string, availableDayValues: array<string> }]

  const [isModalShowConfirm, setIsModalShowConfirm] = useState(false);

  const timeOfDayOptions = [
    {
      value: 'early-morning',
      name: 'Sáng',
      iconURL: 'https://cdn.verbling.com/static/svg/icons8/48282dbccf7cd484dbeb475e9da33181.icons8-partly_cloudy_day.svg',
      time: '(06:00-11:00)',
    },
    {
      value: 'morning',
      name: 'Trưa',
      iconURL: 'https://cdn.verbling.com/static/svg/icons8/470c5669aa5ba82f6963c4ae5be21381.icons8-sunrise.svg',
      time: '(11:00-15:00)',
    },
    {
      value: 'afternoon',
      name: 'Chiều',
      iconURL: 'https://cdn.verbling.com/static/svg/icons8/26750580be019886e410a7c7cc727d9f.icons8-sun.svg',
      time: '(15:00-18:00)',
    },
    {
      value: 'evening',
      name: 'Tối',
      iconURL: 'https://cdn.verbling.com/static/svg/icons8/aa53bcb429c5771cc8e11186fc853d37.icons8-new_moon.svg',
      time: '(18:00-24:00)',
    },
  ];

  const dayOfWeekOptions = [
    { value: 'sun', name: 'CN', },
    { value: 'mon', name: 'T2', },
    { value: 'tue', name: 'T3', },
    { value: 'wed', name: 'T4', },
    { value: 'thu', name: 'T5', },
    { value: 'fri', name: 'T6', },
    { value: 'sat', name: 'T7', },
  ]

  const renderInteractiveRows = () => {
    return timeOfDayOptions.map((timeOption, index) => (
      <div key={`timeofday-${index}`} className={classes['calendar-row']}>
        <div className={classes['timeofday-column']}>
          <div className={classes['timeofday-photo-container']}>
            <img src={timeOption.iconURL} alt={timeOption.name} />
          </div>
          <div className={classes['timeofday-name']}>{timeOption.name}</div>
          <div className={`d-none d-sm-block ${classes['timeofday-time']}`}>{timeOption.time}</div>
        </div>
        {dayOfWeekOptions.map((dayOption, i) => {
          let isAvailable = false;
          const availableTimeFound = props.availableTimeList.find(availableTime => availableTime.timeOfDayValue === timeOption.value);
          isAvailable = availableTimeFound.availableDayValues.findIndex(availableDayValue => availableDayValue === dayOption.value) > -1;

          if (isAvailable === false) {
            return (
              <div
                key={`dayofweek-${i}`}
                className={`${classes['dayofweek-column']} ${classes['busy-cell']}`}
              ></div>
            );
          }

          return (
            <OverlayTrigger
              key={`dayofweek-${i}`}
              placement={'bottom'}
              overlay={
                <Tooltip id={`tooltip-bottom`} style={{ fontFamily: 'Quicksand' }}>
                  <strong>Bấm vào</strong> để đặt lịch.
                </Tooltip>
              }
            >
              <div
                key={`dayofweek-${i}`}
                className={`${classes['dayofweek-column']} ${classes['available-cell']}`}
                onClick={() => {setIsModalShowConfirm(true)}}
              ></div>
            </OverlayTrigger>
          );
        })}
      </div>
    ))
  }
  
  return (
    <div className={classes['calendar']}>
      <div className={classes['calendar-row']}>
        <div className={classes['timeofday-column']}></div>
        {dayOfWeekOptions.map((dayOption, i) => (
          <div
            key={`dayofweek-${i}`}
            className={`${classes['dayofweek-column']}`}
          >
            {dayOption.name}
          </div>
        ))}
      </div>

      {renderInteractiveRows()}

      <Modal show={isModalShowConfirm} centered onHide={() => {setIsModalShowConfirm(false)}} size="sm" dialogClassName={classes['dialog-confirm']}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: 'bold' }}>Xác nhận</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Hãy kiểm tra lại các thông tin sau.</div>
          <div>
            <div className="row">
              <div className="col-4">Chi phí</div>
              <div className="col-8 font-weight-bold">$24 mỗi giờ</div>
            </div>
            <div className="row">
              <div className="col-4">Thời gian</div>
              <div className="col-8 font-weight-bold">Buổi sáng (06:00-11:00)</div>
            </div>
            <div className="row">
              <div className="col-4">Ngày</div>
              <div className="col-8 font-weight-bold">Chủ nhật</div>
            </div>
          </div>
          <div style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>Gia sư sẽ chủ động liên hệ lại với bạn về ngày giờ cụ thể.</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setIsModalShowConfirm(false)}}>
            Đóng
          </Button>
          <Button variant="success" onClick={() => {setIsModalShowConfirm(false)}}>
            Đặt lịch
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TutorCalendar;