import { useContext } from "react";
import { CartContext } from "../CartContext.js";

function SearchInput() {
  const { query, handleInputChange } = useContext(CartContext);
  return (
    <div className=" container bg-white mt-[3.7rem] md:mt-[3.7rem] ">
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
