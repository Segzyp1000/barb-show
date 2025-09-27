import React from "react";
import Input from "./Input";

type PriceProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedPrice: number | null;
  
};

function Price({ handleChange, selectedPrice }: PriceProps) {
  return (
    <div className="mt-5 text-navColor">
      <div className="font-semibold">Price</div>
      
      <Input
        handleChange={handleChange}
        value={50}
        title="0-₦50"
        name="price"
        checked={selectedPrice === 50} 
       />
      <Input
        handleChange={handleChange}
        value={100}
        title="₦50-₦100"
        name="price"
        checked={selectedPrice === 100}
       />
      <Input
        handleChange={handleChange}
        value={150}
        title="₦100-₦150"
        name="price"
        checked={selectedPrice === 150}
        />
      <Input
        handleChange={handleChange}
        value={200}
        title="Over ₦150"
        name="price"
        checked={selectedPrice === 200}
      />
    </div>
  );
}

export default Price;