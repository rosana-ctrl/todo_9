import React from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import InputRadio from "../InputRadio/InputRadio";
import S from "./Form.module.css";
import { useForm } from "react-hook-form";

const Form = () => {
  function cadastrar() {
    console.log("cadastrando o interessado...");
  }

  return (
    <div>
      <form className={S.form}>
        <div className={S.divInputs}>
          <Label className={S.labelRadio} text="Seu nome"></Label>
          <input className={S.input} type="text"></input>
        </div>

        <div className={S.divInputs}>
          <Label text="E-mail"></Label>
          <input
            className={S.input}
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          ></input>
        </div>

        <div className={S.divInputs}>
          <Label text="CPF"></Label>
          <input className={S.input} type="text" pattern="^[0-9]{11}$"></input>
        </div>

        <div className={S.radio}>
          <InputRadio />
          <Label text="Masculino" />

          <InputRadio />
          <Label text="Feminino" />
        </div>

        <Button onClick={cadastrar} style={S.btnForm} text="Enviar"></Button>
      </form>
    </div>
  );
};

export default Form;
