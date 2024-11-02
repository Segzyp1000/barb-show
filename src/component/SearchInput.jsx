import React from "react";

function SearchInput({ handleinputChange, query }) {
  return (
    <div className=" bg-white mt-[5.5rem] ">
      <input
        onChange={handleinputChange}
        value={query}
        type="text"
        className="w-full text-navColor  p-5 border-2 border-gray-300 ring-slate-500 "
        placeholder="Search for different kinds of shoe"
      />
    </div>
  );
}

export default SearchInput;
