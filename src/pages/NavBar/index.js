import React from 'react'
import style from './index.scss'
import { Menu } from 'antd'

export default function index() {
  return (
    <nav className={style.header}>
      <a className={style.logo} href="http://www.baidu.com">lalal</a>

      <Menu className={style['menu-left']} mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key={'home'}>主页</Menu.Item>
          <Menu.Item key={'menus'}>菜单</Menu.Item>
          <Menu.Item key={'admin'}>管理</Menu.Item>
          <Menu.Item key={'about'}>关于我们</Menu.Item>
          <Menu.Item className={style.login} key={'login'}>登录</Menu.Item>
          <Menu.Item className={style.register} key={'register'}>注册</Menu.Item>
      </Menu>
      
    </nav>
  )
}
