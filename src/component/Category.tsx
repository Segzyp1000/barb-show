import React from "react";
import Input from "./Input";

type CategoryProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCategory?: string;
  
};

function Category({ handleChange, selectedCategory}: CategoryProps) {
  return (
    <div className="mt-5 text-navColor">
      <div className="font-semibold">Category</div>
      <Input
        handleChange={handleChange}
      
        value=""
        title="All"
        name="category"
        checked={selectedCategory === ""}
        
      />
      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="category"
        checked={selectedCategory === "sneakers"}
        
      />
      <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="category"
        checked={selectedCategory === "sandals"}
        
      />
      <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="category"
        checked={selectedCategory === "flats"}
      
      />
    </div>
  );
}

export default Category;