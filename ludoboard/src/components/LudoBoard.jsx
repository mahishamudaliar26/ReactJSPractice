import React from "react";
import { useState } from "react";

function LudoBoard() {
  const [move, setMove] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  let updateBlue = () => {
    move.blue += 1;
    console.log(`This is using callback function blue: ${move.blue}`);
    setMove({ ...move });
  };

  let updateGreen = () => {
    console.log(`This is using callback function green: ${move.green}`);
    setMove((prevValues) => {
      return { ...prevValues, green: prevValues.green + 1 };
    });
  };

  let updateRed = () => {
    console.log(`This is using callback function red: ${move.red}`);
    setMove((prevValues) => {
      return { ...prevValues, red: prevValues.red + 1 };
    });
  };

  let updateYellow = () => {
    console.log(`This is using callback function yellow: ${move.yellow}`);
    setMove((prevValues) => {
      return { ...prevValues, yellow: prevValues.yellow + 1 };
    });
  };
  return (
    <>
      <div className="board">
        <p>Blue Moves = {move.blue} </p>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={updateBlue}
        >
          +1
        </button>
        <p>Green Moves = {move.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red Moves = {move.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
        <p>Yellow Moves = {move.yellow} </p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
      </div>
    </>
  );
}

export default LudoBoard;
