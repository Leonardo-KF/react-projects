import React, { useState, useEffect } from "react";
import "./text.css";

function TextD() {
  const frase2 = `O 
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
      <pre>{frase2.slice(0, count1)}</pre>
    </div>
  );
}

export default TextD;
