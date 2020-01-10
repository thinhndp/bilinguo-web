import React from 'react';
import { Button, Container } from 'react-bootstrap';

import { useMediaQuery } from 'react-responsive';

import classes from './Showcase.module.scss';

function Home() {
  // const [toggler, setToggler] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <div className={classes['showcase']}>
      <div className={classes['opacity-layer']} />
      <div className={classes['showcase-inner-container']}>
        {
          isDesktop &&
          <div className={classes['globe-img']}>
            <img
              style={{
                width: '540px',
                height: '540px'
              }}
              src={require('../../../../../assets/globe1.png')}
              alt='earth'
            ></img>
          </div>
        }
        <div className={classes['text-and-button']}>
          <h1>Học Tiếng Anh Miễn Phí</h1>
          <p>Một phương pháp học tiếng anh bằng hình thức giải trí, đồng thời trau dồi tất cả những kỹ năng.</p>
          <Button
            size="lg"
            href="/learn"
            className={classes['button']}
          >Bắt đầu</Button>
        </div>
      </div>
    </div>
  )
}

export default Home;