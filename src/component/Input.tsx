// src/components/Input.tsx
import React from "react";

type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  title: string;
  name: string;
  color?: string;
  checked?: boolean;
};

function Input({ handleChange, value, title, name, color, checked }: InputProps) {
  return (
    <label className="sidebar-label flex gap-2 items-center cursor-pointer">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        className="w-5 h-5 rounded-full border border-gray-500 cursor-pointer appearance-none"
        style={{
          backgroundColor: color || "transparent",
          boxShadow: checked ? "0 0 0 2px #000 inset" : "none", // highlight when selected
        }}
      />
      <span>{title}</span>
    </label>
  );
}

export default Input;