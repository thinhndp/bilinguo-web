import React, { useState } from 'react';
import { Container, Button, Dropdown, DropdownItem } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { FiList } from 'react-icons/fi';
import { MdStore, MdFace, MdWeb, MdForum  } from 'react-icons/md';
import { HamburgerArrow, HamburgerSpin } from 'react-animated-burgers';

import classes from './MyNavbar.module.scss';

function MyNavbar(props) {
  const [burgerIsActive, setBurgurIsActive] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const isDesktop = useMediaQuery({ minWidth: 1224 });

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </div>
  ));

  const getCurrentActiveRoute = () => {
    if (location.pathname.includes('learn')) {
      return 'learn';
    }
    if (location.pathname.includes('forum') || location.pathname.includes('post') || location.pathname.includes('new-post')) {
      return 'forum';
    }
    if (location.pathname.includes('shop')) {
      return 'shop';
    }
    if (location.pathname.includes('tutors')) {
      return 'tutors';
    }
    return 'nope';
  }
  
  const toggleBurger = () => {
    setBurgurIsActive(!burgerIsActive);
    console.log(location);
  }

  return (
    <div className={classes['navbar']}>
      <Container className={classes['navbar-inner-container']}>
        <div className={classes['navbar-brand']}>
          <a href="/">Bilinguo</a>
        </div>
        {
          isDesktop &&
          <div className={classes['navbar-middle']}>
            <div
              className={
                classes['nav-item']
                + ((getCurrentActiveRoute() === 'learn') ? (' ' + classes['nav-item-active']) : (''))
              }
              onClick={() => { history.push('/learn') }}
            >
              <MdWeb className={classes['icon']}></MdWeb>
              <div>Bài tập</div>
            </div>
            <div
              className={
                classes['nav-item']
                + ((getCurrentActiveRoute() === 'forum') ? (' ' + classes['nav-item-active']) : (''))
              }
              onClick={() => { history.push('/forum') }}
            >
              <MdForum className={classes['icon']}></MdForum>
              <div>Diễn đàn</div>
            </div>
            <div
              className={
                classes['nav-item']
                + ((getCurrentActiveRoute() === 'shop') ? (' ' + classes['nav-item-active']) : (''))
              }
              onClick={() => { history.push('/shop') }}
            >
              <MdStore className={classes['icon']}></MdStore>
              <div>Cửa hàng</div>
            </div>
            <div
              className={
                classes['nav-item']
                + ((getCurrentActiveRoute() === 'tutors') ? (' ' + classes['nav-item-active']) : (''))
              }
              onClick={() => { history.push('/tutors') }}
            >
              <MdFace className={classes['icon']}></MdFace>
              <div>Gia sư</div>
            </div>
          </div>
        }
        {
          isDesktop &&
          <div className={classes['navbar-right']}>
            <Button variant="secondary" className="mr-2">Đăng ký</Button>
            <Button variant="success">Đăng nhập</Button>
          </div>
        }
        {
          !isDesktop &&
          <div>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} variant="success" id="dropdown-basic">
              {/* <FiList></FiList> */}
              <HamburgerSpin isActive={burgerIsActive} toggleButton={toggleBurger} barColor="white" />
            </Dropdown.Toggle>

            <Dropdown.Menu className={classes['dd-menu']}>
              <Dropdown.Item className={classes['dd-text']} href="/learn">Bài tập</Dropdown.Item>
              <Dropdown.Item className={classes['dd-text']} href="/forum">Diễn đàn</Dropdown.Item>
              <Dropdown.Item className={classes['dd-text']} href="/shop">Cửa hàng</Dropdown.Item>
              <Dropdown.Item className={classes['dd-text']} href="/tutors">Gia sư</Dropdown.Item>
              <DropdownItem divider />
              <Dropdown.Item className={classes['dd-text']} href="/">Đăng ký</Dropdown.Item>
              <Dropdown.Item className={classes['dd-text']} href="/">Đăng nhập</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
        }
      </Container>
    </div>
  );
}

export default MyNavbar;