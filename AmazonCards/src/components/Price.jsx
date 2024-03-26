import React from "react";

function Price({ oldPrice, newPrice, description }) {
  let containerStyle = {
    textDecoration: "line-through",
  };
  let descriptionStyle = {
    alignItems: "center",
  };
  return (
    <>
      <div>
        <span style={containerStyle}> Rs.{oldPrice}</span>
        <br></br>
        <span>Rs. {newPrice}/-</span>
        <br></br>
        <span style={descriptionStyle}> {description}</span>
        <br></br>
      </div>
    </>
  );
}

export default Price;
