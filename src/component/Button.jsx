import React from "react";

function Button({ onClickHandler, value, title }) {
  return (
    <button
      className="shadow-sm  px-3 bg-white hover:bg-gray-300 border-2 "
      onClick={() => onClickHandler({ target: { value } })}
      type="button"
      value={value}
    >
      {title}
    </button>
  );
}

export default Button;
