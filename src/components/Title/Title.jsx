import React from "react";
import S from "./Title.module.css";

export default function Title({ h2, h1, h3 }) {
  const componentArray = [
    <h2 className={S.h2} key={1}>
      {h2}
    </h2>,
    <h1 className={S.h1} key={2}>
      {h1}
    </h1>,
    <h3 className={S.h3} key={3}>
      {h3}
    </h3>,
  ];

  return <div className={S.divTitle}>{componentArray}</div>;
}
