import React from "react";
import Input from "./Input";

function Color({ handleChange }) {
  return (
    <div className="text-navColor">
      <div className="font-semibold mt-5">Color</div>
      <label>
        <input
          onChange={handleChange}
          type="radio"
          value=""
          name="test2"
          style={{ backgroundColor: "color", border: "solid 1px #000" }}
        />
        <span className="checkmark px-1"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="test3"
        color="white"
      />
    </div>
  );
}

export default Color;
