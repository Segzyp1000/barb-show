import React, { useContext } from "react";
import { CartContext } from "../CartContext";

function SearchInput() {
  const { query, handleInputChange } = useContext(CartContext);
  return (
    <div className=" bg-white mt-[4.9rem] md:mt-[5.9rem] ">
      <input
        onChange={handleInputChange}
        value={query}
        type="text"
        className="w-full text-navColor p-5 border-4 shadow-sm border-gray-200 ring-slate-300 "
        placeholder="Search for different kinds of shoe"
      />
    </div>
  );
}

export default SearchInput;
