import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import { Layout } from 'antd';
import NavBar from './NavBar';
import Home from './Home'

const { Header, Content } = Layout;

function IndexPage() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavBar />
      </Header>
      <Content className={styles.content}>
        <Home></Home>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
