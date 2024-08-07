import React from "react";

function SearchInput({ handleinputChange }) {
  return (
    <>
      <div className="mt-5 flex justify-center items-center relative">
        <input
          onChange={handleinputChange}
          type="text"
          className="w-full mx-6 md:mx-12 bg-white text-black border-red-500  p-2 flex flex-start fixed "
          placeholder="Search for men, women and children shoes"
        />
      </div>
    </>
  );
}

export default SearchInput;
