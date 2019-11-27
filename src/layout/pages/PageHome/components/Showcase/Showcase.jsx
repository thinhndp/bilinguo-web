import React from 'react';
import { Button, Container } from 'react-bootstrap';

import classes from './Showcase.module.scss';

function Home() {
  // const [toggler, setToggler] = useState(false);
  return (
    <div className={classes['showcase']}>
      <div className={classes['opacity-layer']} />
      <Container className={classes['showcase-inner-container']}>
        <Button size="lg" href="/learn">Bắt đầu</Button>
      </Container>
    </div>
  )
}

export default Home;