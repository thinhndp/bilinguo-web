import React from 'react';
import { Navbar } from 'react-bootstrap';
import classes from './Showcase.module.scss'

const Showcase = (props) => {
  return (
    <div>
      <Navbar className={classes['navbar']}>
        <div style={{fontSize: "26px", fontWeight: "bold", marginLeft: "60px"}}>Bilinguo</div>
      </Navbar>
    </div>
  );
};

export default Showcase;