import React from "react";
import Button from "./Button";

type SyntheticEvent = {
  target: { value: string | number };
};

type RecommendedProps = {
  handleClick: (event: SyntheticEvent) => void;
};

function Recommended({ handleClick }: RecommendedProps) {
  return (
    <div className="text-navColor bg-white p-7 container">
      <h3 className="font-semibold py-5">Recommended</h3>
      <div className="button flex flex-wrap space-x-1 space-y-2 md:space-y-0">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
      </div>
    </div>
  );
}

export default Recommended;