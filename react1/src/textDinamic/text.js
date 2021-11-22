import React, { useState, useEffect } from "react";
import "./text.css";
import Typewriter from "typewriter-effect";

function TextD() {
  const frase2 = `
O 
Leo Fleck
é
um
gênio`;

  let [count1, setCount1] = useState(0);

  if (count1 <= frase2.length) {
    setTimeout(() => {
      setCount1(count1 + 1);
    }, 200);
  }

  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Teste").start().stop();
          typewriter.typeString("teste2").start();
        }}
      />
    </div>
  );
}

export default TextD;
