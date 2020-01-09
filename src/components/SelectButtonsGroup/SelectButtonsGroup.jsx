import React, { useState } from 'react';
import { Badge, Button, ButtonGroup, Container, Dropdown } from 'react-bootstrap';
import InputRange from 'react-input-range';

import classes from './SelectButtonsGroup.module.scss';

function SelectButtonsGroup(props) {
  const [selectedValues, setSelectedValues] = useState([]);

  const toggleValue = (value) => {
    let newSelectedValue = [...selectedValues];
    if (selectedValues.includes(value)) {
      // Deselect
      const index = selectedValues.indexOf(value);
      if (index > -1) {
        newSelectedValue.splice(index, 1);
        setSelectedValues(newSelectedValue);
      }
    } else {
      // Select
      newSelectedValue.push(value);
      setSelectedValues(newSelectedValue);
    }
    
    props.onChange(newSelectedValue);
  }
  
  return (
    <div className={classes['buttons-group']}>
      {props.options.map(option => (
        <div
          className={`${classes['buttons-group-button']} ${selectedValues.includes(option.value) ? classes['active'] : ''}`}
          onClick={() => {toggleValue(option.value)}}
        >
          {option.component}
        </div>
      ))}
    </div>
  )
}

export default SelectButtonsGroup;