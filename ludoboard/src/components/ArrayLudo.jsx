import React from "react";
import { useState } from "react";

function ArrayLudo() {
  const [arr, setArray] = useState(["Hello"]);

  let change = () => {
    setArray([...arr, "Everyone"]);
    console.log(arr);
  };
  return (
    <>
      <p>{arr}</p>
      <button onClick={change}> Click me</button>
    </>
  );
}

export default ArrayLudo;
