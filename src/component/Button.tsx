import React from "react";

type SyntheticEvent = {
  target: { value: string | number };
};

type ButtonProps = {
  onClickHandler: (event: SyntheticEvent) => void;
  value: string | number;
  title: string;
};

function Button({ onClickHandler, value, title }: ButtonProps) {
  return (
    <button
      className="shadow-sm px-3 bg-white hover:bg-gray-300 border-2"
      onClick={() => onClickHandler({ target: { value } })}
      type="button"
      value={value}
    >
      {title}
    </button>
  );
}

export default Button;