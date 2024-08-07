import React from "react";
import Category from "./Category";
import Price from "./Price";
import Color from "./Color";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="hidden md:block shadow-lg border-black mt-6 p-12 bg-white">
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
