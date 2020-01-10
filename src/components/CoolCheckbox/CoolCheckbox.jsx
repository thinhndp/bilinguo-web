import React, { useState } from 'react';
import { Badge, Button, ButtonGroup, Container, Dropdown } from 'react-bootstrap';

import uuid from 'uuid';

import classes from './CoolCheckbox.module.scss';

function CoolCheckbox() {
  const elementId = uuid();
  const [isChecked, setIsChecked] = useState(true);
  
  return (
    <>
      <label className={classes['switch']}>
        <input type="checkbox" checked={isChecked} />
        <span
          class={`${classes['slider']} ${classes['round']}`}
          onClick={() => {
            setIsChecked(!isChecked);
          }}></span>
      </label>
    </>
  )
}

export default CoolCheckbox;