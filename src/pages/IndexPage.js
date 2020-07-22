import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Layout } from 'antd';

//引入路由需要的组件
import { Switch, Redirect } from 'dva/router';

import NavBar from './NavBar';
// import Home from './Home';
// import About from './About';
// import Admin from './Admin';
// import Menus from './Menus';
// import Register from './User/Register';
// import Login from './User/Login';
import SubRoutes from '../utils/SubRoutes';

const { Header, Content } = Layout;


function IndexPage(props) {
  const { routes } = props;
  // console.log(props)
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavBar {...props} />
      </Header>
      <Content className={styles.content}>
        {/* 一级路由 */}
        <Switch>
          {/* <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menus" component={Menus} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> */}

          {routes.map((route, i) => (
            <SubRoutes key={i} {...route} />
          ))}

          {/* 重定向 */}
          <Redirect to="/home" />
        </Switch>

      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
