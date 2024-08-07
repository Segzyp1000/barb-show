import React from "react";
import Button from "./Button";

function Recommended({ handleClick }) {
  return (
    <>
      <div className=" text-navColor bg-white mt-6 ">
        <h3 className="font-semibold py-5">Recommended</h3>
        <div className="button flex  space-x-1">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        </div>
      </div>
    </>
  );
}

export default Recommended;
