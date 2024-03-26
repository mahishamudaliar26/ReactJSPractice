import React from "react";
import Price from "./Price";

function Producttabs({ title, idx }) {
  let oldPrice = ["12.495", "11.2533", "45.456", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = ["Intuitive", "Stylish", "Fashionable", "Compact"];

  let style = {
    display: "inline-block",
    marginRight: "10px",
    borderRadius: "1rem",
    border: "black",
    justifyContent: "center",
    alignItem: "center",
    marginBottom: "90px",
    backgroundColor: "#87CEEB",
    paddingBottom: "100px",
    paddingTop: "30px",
    width: "270px",
  };

  return (
    <>
      <div style={style}>
        <h4>{title}</h4>
        <Price
          oldPrice={oldPrice[idx]}
          newPrice={newPrice[idx]}
          description={description[idx]}
        />
      </div>
    </>
  );
}

export default Producttabs;
