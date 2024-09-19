import React from 'react'
import style from './styles.module.scss'

export default function header() {
  return (
    <div className={style.container}>
      <img src='/logo.svg' alt="logo"/>
      <h2 className={style.wellcome}>Bem-vindo de volta, Marcus</h2>
      <p className={style.date}>Segunda, 01 de dezembro de 2025</p>
    </div>
  )
}
