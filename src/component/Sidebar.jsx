import React from "react";
import Category from "./Category";
import Price from "./Price";
import Color from "./Color";

function Sidebar({
  onCategoryChange,
  onColorChange,
  onPriceChange,
  selectedCategory,
  selectedColor,
  selectedPrice,
}) {
  return (
    <>
      <section className="lg:block hidden shadow-lg border-black p-16 bg-white">
        <div className="text-2xl font-bold text-navColor ">
          <p>Sort By</p>
        </div>
        <div className="logo-container">
          <Category
            handleChange={onCategoryChange}
            selectedCategory={selectedCategory}
          />
          <Color handleChange={onColorChange} selectedColor={selectedColor} />
          <Price handleChange={onPriceChange} selectedPrice={selectedPrice} />
        </div>
      </section>
    </>
  );
}

export default Sidebar;
