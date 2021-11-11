import "./App.css";
import Button from "./button/button";
import TextD from "./textDinamic/text";

function App() {
  return (
    <>
      <h1>Testando o react</h1>
      <Button nome="+" estilo="sucess" />
      <Button nome="-" estilo="danger" />
      <TextD />
    </>
  );
}

export default App;
