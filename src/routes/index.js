import Home from './Home';
import NotFound from './NotFound';

export default [
  {
    path:  `/`,
    exact: true,
    component: Home
  },
  {
    path:  `*`,
    // exact: true,
    component: NotFound
  }
];