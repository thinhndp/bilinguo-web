import React from 'react';

import MyNavbar from '../../components/MyNavbar/MyNavbar';
import Showcase from './components/Showcase/Showcase';

// import classes from './PageHome.module.scss';


function PageHome() {
  // const [toggler, setToggler] = useState(false);
  return (
    <div>
      <MyNavbar />
      <Showcase />
    </div>
  )
}

export default PageHome;