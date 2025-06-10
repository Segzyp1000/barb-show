import React from "react";
import Input from "./Input";

function Category({ handleChange }) {
  return (
    <div className="category text-navColor  mt-5">
      <div className="font-semibold gap-4 ">Categories</div>
      <label>
        <input
          onChange={handleChange}
          type="radio"
          value=""
          name="test"
          style={{ backgroundColor: "color", border: "solid 1px #000" }}
        />
        <span className="checkmark px-1 mt-1"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="test"
      />

      <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test"
      />

      <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
      />
    </div>
  );
}

export default Category;
