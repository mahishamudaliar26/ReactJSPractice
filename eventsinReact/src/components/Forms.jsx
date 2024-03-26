import React from "react";

function Forms() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Function handle submit is called");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="write something"></input>
        {/* <button onClick={handleSubmit}>Submit</button> */}
        <button>Submit</button>
      </form>
    </>
  );
}

export default Forms;
