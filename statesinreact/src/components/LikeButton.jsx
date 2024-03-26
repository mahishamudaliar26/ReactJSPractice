import React from "react";
import { useState } from "react";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  const isToggle = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <p onDoubleClick={isToggle}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={{ color: "#f11313" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </>
  );
}

export default LikeButton;
