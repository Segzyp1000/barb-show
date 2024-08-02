import React from "react";
import Button from "./Button";

function Recommended({ handleClick }) {
  return (
    <>
      <div className="mx-5 md:mx-10 mt-5 text-navColor">
        <h3 className="font-semibold">Recommended</h3>
        <div className="button flex mt-5 space-x-1">
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
