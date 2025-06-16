import React from "react";
import Input from "./Input";

function Category({ handleChange }) {
  return (
    <div className="category text-navColor  mt-5">
      <div className="font-semibold gap-4 ">Categories</div>
      <label>
        <Input
          handleChange={handleChange}
          type="radio"
          value=""
          title="All"
          name="test"
          style={{ backgroundColor: "color", border: "solid 1px #000" }}
        />
      </label>

      <Input
        handleChange={handleChange}
        type="radio"
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleChange={handleChange}
        type="radio"
        value="flats"
        title="Flats"
        name="test"
      />

      <Input
        handleChange={handleChange}
        type="radio"
        value="sandals"
        title="Sandals"
        name="test"
      />

      <Input
        handleChange={handleChange}
        type="radio"
        value="heels"
        title="Heels"
        name="test"
      />
    </div>
  );
}

export default Category;
