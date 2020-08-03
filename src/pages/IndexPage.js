import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Layout } from 'antd';
//引入路由需要的组件
import { Switch } from 'dva/router';

import NavBar from './NavBar';
import SubRoutes, { RedirectRoute, NoMatchRoute } from '../utils/SubRoutes';

const { Header, Content } = Layout;


function IndexPage(props) {
  const { routes } = props;
  console.log(props)
  // console.log(props)
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavBar {...props} />
      </Header>
      <Content className={styles.content}>
        {/* 一级路由 */}
        <Switch>
          {routes.map((route, i) => (
            <SubRoutes key={i} {...route} />
          ))}
          <RedirectRoute exact={true} from={'/'} routes={routes}></RedirectRoute>
          {/* 输入的连接不存在时，跳转到NoMatch组件中 */}
          <NoMatchRoute />
        </Switch>

      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
