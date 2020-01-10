import React, { useState } from 'react';
import { Badge, Button, ButtonGroup, Container, Dropdown } from 'react-bootstrap';
import InputRange from 'react-input-range';

import SelectAvailability from '../SelectAvailability/SelectAvailability';

import classes from './FilterTutors.module.scss';
import CoolCheckbox from '../../../../../components/CoolCheckbox/CoolCheckbox';

function FilterTutors() {
  const [priceFilterValue, setPriceFilterValue] = useState({min: 1, max: 40})
  
  return (
    <div className={classes['outlined-card']}>
      <div className={classes['filter-card-content']}>
        <div className={classes['filter-card-content-title']}>
          Lọc Gia sư
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

        <div className="row">
          <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
            <div className={classes['filter-section']}>
              <div className={classes['filter-section-title']}>
                Chương trình
              </div>
              <div className={classes['filter-section-content']}>
                <div className={classes['switch-checkbox-container']}>
                  <CoolCheckbox />
                  <span>Mới bắt đầu</span>
                </div>
                <div className={classes['switch-checkbox-container']}>
                  <CoolCheckbox />
                  <span>Trung cấp</span>
                </div>
              </div>
              <div className={classes['filter-section-content']}>
                <div className={classes['switch-checkbox-container']}>
                  <CoolCheckbox />
                  <span>Khá giỏi</span>
                </div>
                <div className={classes['switch-checkbox-container']}>
                  <CoolCheckbox />
                  <span>Nâng cao</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
            <div className={classes['filter-section']}>
              <div className={classes['filter-section-title']}>
                Giới tính
              </div>
              <div className={classes['filter-section-content']}>
                <div className={classes['switch-checkbox-container']}>
                  <CoolCheckbox />
                  <span>Nam</span>
                </div>
                <div className={classes['switch-checkbox-container']}>
                  <CoolCheckbox />
                  <span>Nữ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FilterTutors;