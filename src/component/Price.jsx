import React from "react";
import Input from "./Input";

function Price({ handleChange }) {
  return (
    <div className="mt-5 text-navColor">
      <div className="font-semibold">Price</div>
      <label>
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={50}
        title="$0-$50"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="$50-$100"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title="$100-$150"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="test2"
      />
    </div>
  );
}

export default Price;
