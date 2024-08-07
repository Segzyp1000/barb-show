import React from "react";
import Category from "./Category";
import Price from "./Price";
import Color from "./Color";

function Sidebar({ handleChange }) {
  return (
    <>
<<<<<<< HEAD
      <section className="hidden md:block shadow-lg border-black p-12 mt-5">
=======
      <section className="hidden md:block shadow-lg border-black mt-6 p-12 bg-white">
>>>>>>> master
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
