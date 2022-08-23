import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'
import S from "./Header.module.css"

const Header = () => {
  return (
  <header className={S.header}>
      <div className={S.wrapper}>
      <Title h2="uma seleção de produtos" h1="especial para você"  h3="Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!"></Title>
     
      <div className={S.divBtn}>
        <Button style={S.btn} text = "Conheça a Linx"></Button>
        <Button style={S.btn} text = "Ajude o algoritmo"></Button>
        <Button style={S.btn} text = "Seus produtos"></Button>
        <Button style={S.btn} text = "Compartilhe"></Button>
      </div>
     
      </div>
  </header>
  )
}

export default Header