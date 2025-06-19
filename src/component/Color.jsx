import React from "react";
import Input from "./Input";

function Color({ handleChange }) {
  return (
    <div className="text-navColor">
      <div className="font-semibold mt-5">Color</div>
      <Input handleChange={handleChange} value="" title="All" name="color" />
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="color"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="color"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="color"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="color"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="color"
        color="white"
      />
    </div>
  );
}

export default Color;
