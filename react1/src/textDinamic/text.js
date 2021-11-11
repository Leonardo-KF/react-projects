import React, { useState } from "react";
import "./text.css";

let frase1 = "";

function TextD() {
  let [count, setCount] = useState(0);

  const frase = "Explorando o React";
  console.log("rodou");

  console.log(count);
  if (count !== frase.length) {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  } else {
    setCount(0);
    frase1 = "";
  }

  console.log(frase1);
  return (
    <div>
      <h2>{(frase1 += frase[count])}</h2>
    </div>
  );
}

export default TextD;
