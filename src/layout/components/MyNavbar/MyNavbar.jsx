import React from 'react';
import { Container, Button } from 'react-bootstrap';

import classes from './MyNavbar.module.scss';

function MyNavbar() {
  console.log(classes['search-icon'])
  return (
    <div className={classes['navbar']}>
      <Container className={classes['navbar-inner-container']}>
        <div className={classes['navbar-brand']}>
          <a href="/">Bilinguo</a>
        </div>
        <div className={classes['navbar-right']}>
          <div className="mr-3">Ngôn ngữ hiển thị: Tiếng Việt</div>
          <Button variant="secondary" className="mr-2">Đăng ký</Button>
          <Button variant="success">Đăng nhập</Button>
        </div>
      </Container>
    </div>
  );
}

export default MyNavbar;