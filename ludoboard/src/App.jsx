import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LudoBoard from "./components/LudoBoard";
import ArrayLudo from "./components/ArrayLudo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <LudoBoard /> */}
      <ArrayLudo />
    </>
  );
}

export default App;
