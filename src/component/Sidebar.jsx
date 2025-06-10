import React from "react";
import Category from "./Category";
import Price from "./Price";
import Color from "./Color";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="lg:block hidden shadow-lg border-black p-16 bg-white">
        <div className="text-2xl font-bold text-navColor ">
          <p>Sort By</p>
        </div>
        <div className="logo-container">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Color handleChange={handleChange} />
        </div>
      </section>
    </>
  );
}

export default Sidebar;
