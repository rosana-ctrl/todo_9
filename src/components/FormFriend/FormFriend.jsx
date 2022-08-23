import React from "react";
import Label from "../Label/Label";
import Button from "../Button/Button";
import S from "./FormFriend.module.css";

const FormFriend = () => {
  return (
    <form className={S.formFriend}>
      <div className={S.container}>
        <div className={S.campos}>
          {" "}
          <Label text="Seu nome"></Label>
          <input className={S.input} type="text"></input>
        </div>

        <div className={S.campos}>
          <Label text="E-mail"></Label>
          <input
            className={S.input}
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          ></input>
        </div>
      </div>

      <Button style={S.btnFriend} text="Enviar"></Button>
    </form>
  );
};

export default FormFriend;
