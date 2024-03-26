import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./components/Products";
import Messgagebox from "./components/Messgagebox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Products title="laptop" price="20,000" />
      <Products title="mobile" price="30,000" />
      <Products title="computer" price="30,000" />
      <Messgagebox userName={"Mahisha"} textColor={"red"} />
      <Messgagebox userName={"Harini"} textColor={"pink"} />
      <Messgagebox userName={"Pradhyun"} textColor={"blue"} />
    </>
  );
}

export default App;
