import React from "react";
import Logo from "../assets/Logo.png";
import { FaShoppingCart } from "react-icons/fa";

function Nav({ handleinputChange }) {
  return (
    <>
      <div className="text-navColor p-3 w-full border-b  border-slate-300">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="" className="w-[121px]" />

          <div className="flex flex-end space-x-3">
            <a href="">
              <FaShoppingCart />
            </a>
            <a
              href=""
              className="bg-black text-white px-1 rounded-lg hover:bg-slate-300"
            >
              sign in
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center items-center">
        <input
          onChange={handleinputChange}
          type="text"
          className="w-full mx-6 bg-inputColor text-black border-red-500 rounded-lg p-2 flex flex-start"
          placeholder="Search for mem, women and children shoes"
        />
      </div>
    </>
  );
}

export default Nav;
