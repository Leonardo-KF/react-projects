import React, { useState } from "react";
import "./text.css";

let frase1 = "";

function TextD() {
  let [count, setCount] = useState(0);

  const frase = "Explorando o React";
  console.log("rodou");

  return (
    <div>
      <h2>{"teste"}</h2>
    </div>
  );
}

export default TextD;
