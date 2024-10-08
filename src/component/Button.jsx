import React from "react";

function Button({ onClickHandler, value, title }) {
  return (
    <button
      className="shadow-lg border-black px-3 bg-white"
      onClick={onClickHandler}
      value={value}
    >
      {title}
    </button>
  );
}

export default Button;
