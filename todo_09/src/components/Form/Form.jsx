import React from 'react'
import Button from '../Button/Button'
import Label from '../Label/Label'
import S from "./Form.module.css"
const Form = ({style}) => {
  
  function cadastrar(e){
    e.preventDefault()
    console.log("cadastrando o interessado...")
  }

    return (
      <div>
        <form className={S.form}>
          <Label text='Seu nome'></Label>
          <input className={S.input} type="text"></input>
  
          <Label text='E-mail'></Label>
          <input className={S.input} type="email"></input>
  
          <Label text='CPF'></Label>
          <input className={S.input} type="text"></input>

          {/* todo: criar um componente e setar o seu css com float:left */}
          <Label text="Masculino"></Label>
          <input className={S.input} type="radio" ></input>

          <Label text="Feminino"></Label>
          <input className={S.radio}  type="radio" ></input>

          <Button onClick={cadastrar} style={S.btnForm} text="Enviar"></Button>
        </form>
      </div>
    )
  }
  
export default Form