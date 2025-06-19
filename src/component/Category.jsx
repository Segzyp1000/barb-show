import React from "react";
import Input from "./Input";

function Category({ handleChange }) {
  return (
    <div className="category text-navColor  mt-5">
      <div className="font-semibold gap-4 ">Categories</div>
      <label>
        <Input
          handleChange={handleChange}
          value=""
          title="All"
          name="category"
        />
      </label>

      <Input
        handleChange={handleChange}
        type="radio"
        value="sneakers"
        title="Sneakers"
        name="category"
      />
      <Input
        handleChange={handleChange}
        type="radio"
        value="flats"
        title="Flats"
        name="category"
      />

      <Input
        handleChange={handleChange}
        type="radio"
        value="sandals"
        title="Sandals"
        name="category"
      />

      <Input
        handleChange={handleChange}
        type="radio"
        value="heels"
        title="Heels"
        name="category"
      />
    </div>
  );
}

export default Category;
