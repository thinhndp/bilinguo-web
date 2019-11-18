import React from 'react';
import { Navbar } from 'react-bootstrap';
import classes from './Showcase.module.scss'
import Learn from '../Learn/Learn';

const Showcase = (props) => {
  return (
    <div>
      <Navbar className={classes['navbar']}>
        <div style={{fontSize: "26px", fontWeight: "bold", marginLeft: "60px"}}>Bilinguo</div>
      </Navbar>
      <Learn></Learn>
    </div>
  );
};

export default Showcase;