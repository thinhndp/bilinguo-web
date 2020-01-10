import React, { useState } from 'react';
import { Badge, Button, ButtonGroup, Container, Dropdown } from 'react-bootstrap';
import InputRange from 'react-input-range';

import SelectAvailability from '../SelectAvailability/SelectAvailability';

import classes from './FilterTutors.module.scss';

function FilterTutors() {
  const [priceFilterValue, setPriceFilterValue] = useState({min: 1, max: 40})
  
  return (
    <div className={classes['outlined-card']}>
      <div className={classes['filter-card-content']}>
        <div className={classes['filter-card-content-title']}>
          Lọc gia sư
        </div>
        <div className={classes['filter-section']}>
          <div className={classes['filter-section-title']}>
            Giá mỗi giờ
          </div>
          <div className={classes['filter-section-content']} style={{ padding: 15 }}>
            <InputRange
              maxValue={40}
              minValue={1}
              value={priceFilterValue}
              formatLabel={(value, type) => `$${value}`}
              onChange={value => setPriceFilterValue(value)}
            />
          </div>
        </div>
        
        <div className={classes['filter-section']}>
          <div className={classes['filter-section-title']}>
            Khung giờ
          </div>
          <div className={classes['filter-section-content']}>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="primary" size="lg" id="dropdown-basic" style={{ width: '100%' }}>
              Chọn khung giờ
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <SelectAvailability />
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FilterTutors;