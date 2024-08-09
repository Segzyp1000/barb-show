import React from "react";

function Input({ handleChange, value, title, name }) {
  return (
    <label className="sidebar-label flex gap-1">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        className="blue-input"
      />
      <span className="checkmark"></span>
      {title}
    </label>
  );
}

export default Input;
