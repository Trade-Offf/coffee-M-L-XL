import React from 'react';
import { Router, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import Home from './pages/Home'
import About from './pages/About';
import Admin from './pages/Admin';
import Menus from './pages/Menus';
import Register from './pages/User/Register';
import Login from './pages/User/Login';
import SubRoutes from './utils/SubRoutes';

const RouteConfig = [
  {
    path: '/',
    component: IndexPage,
    routes: [
      {
        path: '/home',
        component: Home,
        redirect: true
      },
      {
        path: '/menus',
        component: Menus,
      },
      {
        path: '/admin',
        component: Admin,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/login',
        component: Login,
      }
    ]
  }
];

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" component={IndexPage} /> */}
        {RouteConfig.map((route,i) => (
          <SubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
