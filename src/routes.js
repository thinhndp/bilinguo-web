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
import PageExercise from './layout/pages/PageExercise/PageExercise';
import PageExerciseMenu from './layout/pages/PageExerciseMenu/PageExerciseMenu';
import PageExerciseResult from './layout/pages/PageExerciseResult/PageExerciseResult';
import PageProfileAchievements from './layout/pages/PageProfileAchievements/PageProfileAchievements';
import PageForum from './layout/pages/PageForum/PageForum';
import PagePost from './layout/pages/PagePost/PagePost';

export const routes = [
  {
    path: '/exercise',
    component: PageExercise
  },
  {
    path: '/exercise/result',
    component: PageExerciseResult
  },
  {
    path: '/learn',
    component: PageExerciseMenu
  },
  {
    path: '/profile/achievements',
    component: PageProfileAchievements
  },
  {
    path: '/forum',
    component: PageForum
  },
  {
    path: '/post/:id',
    component: PagePost
  },
  {
    path: '/',
    component: PageHome
  },
];