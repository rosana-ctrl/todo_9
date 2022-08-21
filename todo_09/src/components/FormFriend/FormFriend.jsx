import React from 'react'
import Label from '../Label/Label'
import Button from '../Button/Button'
import S from "./FormFriend.module.css"

const FormFriend = () => {
  return (
    <form className={S.formFriend}>
       <Label text='Seu nome'></Label>
          <input className={S.input} type="text"></input>
  
          <Label className={S.label} text='E-mail'></Label>
          <input className={S.input} type="email"></input>

          <Button style={S.btnFriend} text="Enviar"></Button>
    </form>
  )
}

export default FormFriend