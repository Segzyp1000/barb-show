import React from "react";
import Category from "./Category";
import Price from "./Price";
import Color from "./Color";

function Sidebar({ handleChange }) {
  return (
    <>
      <section className="hidden md:block shadow-lg border-black p-12 mt-5">
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
