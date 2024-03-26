import React from "react";
function DoSomething() {
  console.log("Clicked me");
}
function EventCallObj(event) {
  console.log("Clicked me");
}
function Button() {
  return (
    <>
      <div>
        <button onClick={DoSomething}>Click me </button>
        <p onMouseOver={DoSomething}>This is my new paragraph</p>
        <p onMouseOver={DoSomething()}>This is my new paragraph</p>
        <button onDoubleClick={DoSomething}>This is for double click</button>
      </div>
    </>
  );
}

export default Button;
