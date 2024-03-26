import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import Closure from "./components/Closure";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4>States in react</h4>
      <LikeButton />
      {/* <Closure /> */}
      <Counter />
    </>
  );
}

export default App;
