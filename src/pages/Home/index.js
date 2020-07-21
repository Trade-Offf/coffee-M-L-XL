import React from 'react'
import style from './index.scss'

export default function index() {
  return (
    <div className={style.home}>
      <div className={style.background}>
        <h1>欢迎大家来买咖啡</h1>
        <h2>这里有中杯、大杯和超大杯供大家选择</h2>
      </div>
    </div>
  )
}
