// Components
import Home from '../app/home/components/Home';
import Login from '../app/user/components/Login';
import Signup from '../app/user/components/Signup';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  }
];

export default routes;
