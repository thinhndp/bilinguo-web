import React, { useState } from 'react';

import classes from './CoolCheckbox.module.scss';

function CoolCheckbox() {
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