import React, { Component } from 'react'
import style from './index.scss'
import { Menu } from 'antd'
import { Link } from 'dva/router'

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    }
  }
  // 当页面刷新时，组件会重新加载，会执行componentDidMount（cdm）钩子函数
  // 为解决刷新页面菜单与路由不同步问题，解决方法需放在cdm钩子函数里执行
  componentDidMount() {
    this.handleSetSelectedKey(this.props.location.pathname);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { pathname } = this.props.location;
    if (nextProps.location.pathname !== pathname) {
      // 当路由发生改变时，改变当前菜单选中key值
      this.handleSetSelectedKey(nextProps.location.pathname);
    }
  }

  handleSetSelectedKey(pathname) {
    const temp = pathname.split('/');
    // 如果数组长度小于2，表示只有根路径/，selectedKeys设置为Home,否则取第二个值
    const key = temp && temp.length < 2 ? 'home' : temp[1];
    this.setState({
      selectedKeys: [key]
    })
  }

  render() {
    return (
      <nav className={style.header}>
        <a className={style.logo} href="http://www.baidu.com">lalal</a>

        <Menu
          className={style['menu-left']}
          mode="horizontal"
          defaultSelectedKeys={['home']}
          selectedKeys={this.state.selectedKeys}
        >
          <Menu.Item key={'home'}><Link to='/home'>主页</Link></Menu.Item>
          <Menu.Item key={'menus'}><Link to='/menus'>菜单</Link></Menu.Item>
          <Menu.Item key={'admin'}><Link to='/admin'>管理</Link></Menu.Item>
          <Menu.Item key={'about'}><Link to='/about'>关于我们</Link></Menu.Item>
          <Menu.Item className={style.login} key={'login'}><Link to='/login'>登录</Link></Menu.Item>
          <Menu.Item className={style.register} key={'register'}><Link to='/register'>注册</Link></Menu.Item>
        </Menu>

      </nav>
    )
  }
}
