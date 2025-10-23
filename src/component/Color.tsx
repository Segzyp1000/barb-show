// src/components/Color.tsx
import React from "react";
import Input from "./Input";

type ColorProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedColor?: string;
};

function Color({ handleChange, selectedColor }: ColorProps) {
  return (
    <div className="mt-5 text-navColor">
      <div className="font-semibold mb-2">Color</div>

     
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="color"
        color="black"
        checked={selectedColor === "black"}
      />
      <Input 
      handleChange={handleChange}
      value='green'
      title="Green"
      name='color'
      color="green"
      checked={selectedColor === 'green'}
      />
      
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="color"
        color="red"
        checked={selectedColor === "red"}
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="color"
        color="blue"
        checked={selectedColor === "blue"}
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="color"
        color="white"
        checked={selectedColor === "white"}
      />
    </div>
  );
}

export default Color;