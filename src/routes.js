import React from 'react';

import PageHome from './layout/pages/PageHome/PageHome';
import PageExerciseMenu from './layout/pages/PageExerciseMenu/PageExerciseMenu';
import PageProfileAchievements from './layout/pages/PageProfileAchievements/PageProfileAchievements';

export const routes = [
  {
    path: '/learn',
    component: <PageExerciseMenu />
  },
  {
    path: '/profile/achievements',
    component: <PageProfileAchievements />
  },
  {
    path: '/',
    component: <PageHome />
  },
];