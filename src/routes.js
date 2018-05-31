import Login from './containers/Login/Login'
import Home from './containers/Home/Home'
import CreatingActivity from './containers/Creating-Activity/Creating-Activity';

export const ROUTES = [
  {
    component: Login,
    path: '/login'
  },
  {
    component: Home,
    path: '/'
  },
  {
    component: CreatingActivity,
    path: '/creating_activity'
  }
]
