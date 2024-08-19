import React from "react";

function SearchInput({ handleinputChange }) {
  return (
    <>
      <div className="mt-16 flex justify-center items-center relative">
        <input
          onChange={handleinputChange}
          type="text"
          className="w-full mx-6 md:mx-12 bg-white text-black border-red-500  flex flex-start fixed p-2"
          placeholder="Search for different kinds of shoe"
        />
      </div>
    </>
  );
}

export default SearchInput;
