import React from 'react'
import Button from '../Button/Button'
import S from "./DisplayProduct.module.css"

const DisplayProduct = ({img, nome, descr, oldPrice, price, installmentsCount, installmentsValue}) => {
  return (
    <article className={S.secDisplay}>
        <picture className={S.imgDisplay}>
            <img src = {img}></img>
        </picture>
        <h2 className={S.h2Name}>{nome}</h2>
        <h3 className={S.h3Desc}>{descr}</h3>
        <h3 className={S.h3Old}>De: R$ {oldPrice}</h3>
        <h2 className={S.h2Price}>Por: R$ {price}</h2>
        <h4 className={S.h4Stall}>ou {installmentsCount} x de R$ {installmentsValue}</h4>
        <Button style={S.btnComprar} text = "Comprar"></Button>

    </article>
  )
}

export default DisplayProduct