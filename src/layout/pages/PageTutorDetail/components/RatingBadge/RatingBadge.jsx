import React, { useState } from 'react';
import { Badge, Button, Container, Dropdown } from 'react-bootstrap';
import InputRange from 'react-input-range';

import classes from './RatingBadge.module.scss';

function RatingBadge(props) {
  // props:
  // color
  // photoURL
  // number
  // name
  
  return (
    <div className={classes['badge-container']}>
      <div className={classes['badge']} style={{ borderColor: props.color }}>
        <img className={classes['badge-img']} src={props.photoURL} alt="" />
        <div className={classes['badge-number']} style={{ backgroundColor: props.color }}>{props.number}</div>
      </div>
      <div className={classes['name']}>{props.name}</div>
    </div>
  )
}

export default RatingBadge;