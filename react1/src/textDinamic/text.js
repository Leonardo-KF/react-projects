import React, { useState, useEffect } from "react";
import "./text.css";

function TextD() {
  let [count, setCount] = useState(0);
  const frase = "Explorando o React";

  if (count <= frase.length) {
    setTimeout(() => {
      setCount(count + 1);
    }, 200);
  } else {
    setCount(0);
  }

  return (
    <div>
      <h2>{frase.slice(0, count)}</h2>
    </div>
  );
}

export default TextD;
