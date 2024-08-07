import React from "react";

function Button({ onClickHandler, value, title }) {
  return (
    <button
<<<<<<< HEAD
      className="shadow-lg border-black px-3 bg-inputColor"
=======
      className="shadow-lg border-black px-3 bg-white"
>>>>>>> master
      onClick={onClickHandler}
      value={value}
    >
      {title}
    </button>
  );
}

export default Button;
