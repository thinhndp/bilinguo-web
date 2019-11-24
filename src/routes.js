import React from 'react';

import Showcase from './components/Showcase/Showcase';
import Learn from './components/Learn/Learn';
import Exercise from './components/Exercise/Exercise';

export const routes = [
  {
    path: '/exercise',
    component: <Exercise />
  },
  {
    path: '/learn',
    component: <Learn />
  },
  {
    path: '/',
    component: <Showcase />
  }
];