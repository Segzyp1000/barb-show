import React from "react";

function Input({ handleChange, value, title, name, color }) {
  return (
    <label className="sidebar-label flex gap-1">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        className="blue-input"
        style={{ backgroundColor: value }}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}

export default Input;
