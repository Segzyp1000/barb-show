import React from "react";
import Input from "./Input";

function Price({ handleChange }) {
  return (
    <div className="mt-5 text-navColor">
      <div className="font-semibold">Price</div>
      <label>
        <Input
          handleChange={handleChange}
          type="radio"
          value=""
          title="All"
          name="price"
          style={{ backgroundColor: "color", border: "solid 1px #000" }}
        />
      </label>

      <Input
        handleChange={handleChange}
        type="radio"
        value={50}
        title="0-₦50"
        name="price"
      />
      <Input
        handleChange={handleChange}
        type="radio"
        value={100}
        title="50-₦100"
        name="price"
      />
      <Input
        handleChange={handleChange}
        type="radio"
        value={150}
        title="₦100-₦150"
        name="price"
      />
      <Input
        handleChange={handleChange}
        type="radio"
        value={200}
        title="Over ₦150"
        name="price"
      />
    </div>
  );
}

export default Price;
