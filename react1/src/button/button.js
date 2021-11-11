import React from "react";
import "./button.css";

function Button(props) {
  const content = props.nome;
  const estile = props.estilo;

  return <button className={"btn " + estile}>{content}</button>;
}

export default Button;
