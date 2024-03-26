import React from "react";
import { useState } from "react";

function init() {
  return Math.random();
}

function Counter() {
  const [count, setCount] = useState(init());
  // const [ini, setIni] = useState(init());

  let increInit = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
  };

  function isIncrease() {
    setCount(count + 1);
    console.log(count);
  }
  function isDecrease() {
    setCount(count - 1);
    console.log(count);
  }
  return (
    <>
      {/* <h4> Count: {count}</h4>
      <button onClick={isIncrease}>Increament</button>
      <button onClick={isDecrease}>Decreament</button> */}

      <h4> Count: {count}</h4>
      <button onClick={increInit}>Increament</button>
    </>
  );
}

export default Counter;
