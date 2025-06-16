import React from "react";
import Input from "./Input";

function Color({ handleChange }) {
  return (
    <div className="text-navColor">
      <div className="font-semibold mt-5">Color</div>
      <label>
        <Input
          handleChange={handleChange}
          type="radio"
          value=""
          title="All"
          name="test2"
          style={{ backgroundColor: "color", border: "solid 1px #000" }}
        />
      </label>
      <Input
        handleChange={handleChange}
        type="radio"
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        type="radio"
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        type="radio"
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <Input
        handleChange={handleChange}
        type="radio"
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        type="radio"
        value="white"
        title="White"
        name="test3"
        color="white"
      />
    </div>
  );
}

export default Color;
