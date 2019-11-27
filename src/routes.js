import React from 'react';

// import Showcase from './components/Showcase/Showcase';
// import Learn from './components/Learn/Learn';
// import Exercise from './components/Exercise/Exercise';
// import ExerciseResult from './components/Exercise/ExerciseResult/ExerciseResult';

// export const routes = [
//   {
//     path: '/exercise/result',
//     component: <ExerciseResult />
//   },
//   {
//     path: '/exercise',
//     component: <Exercise />
//   },
//   {
//     path: '/learn',
//     component: <Learn />
//   },
//   {
//     path: '/',
//     component: <Showcase />
//   }
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