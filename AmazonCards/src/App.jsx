import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Producttabs from "./components/Producttabs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Producttabs title="Logistic MX Master" idx={0} />
      <Producttabs title="Apple Pencil (2nd Gen)" idx={1} />
      <Producttabs title="Zebronics Zeb-transformer" idx={2} />
      <Producttabs title="Petronics toad 23" idx={3} />
    </>
  );
}

export default App;
