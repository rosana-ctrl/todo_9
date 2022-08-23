import React from 'react'
import S from "./Label.module.css"

const Label = ({text}) => {
  return (
  <label className={S.label}>{text}</label>
  )
}

export default Label