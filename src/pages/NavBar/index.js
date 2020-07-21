import React from 'react'
import style from './index.scss'
import { Menu } from 'antd'
import { Link } from 'dva/router'

export default function index() {
  return (
    <nav className={style.header}>
      <a className={style.logo} href="http://www.baidu.com">lalal</a>

      <Menu className={style['menu-left']} mode="horizontal" defaultSelectedKeys={['home']}>
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
