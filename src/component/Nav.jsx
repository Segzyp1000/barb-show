import React from "react";
import Logo from "../assets/Logo.png";
import { FaShoppingCart } from "react-icons/fa";

function Nav({ handleinputChange }) {
  return (
    <>
      <div className="text-navColor w-full">
        <div className="border-b border-slate-300">
          <div className="flex justify-between items-center p-2 mx-2 md:mx-9 ">
            <img src={Logo} alt="" className="w-[121px] md:w-[150px]" />
            <div className="flex flex-end space-x-3">
              <a href="">
                <FaShoppingCart />
              </a>
              <a
                href=""
                className="bg-black text-white px-1 rounded-lg hover:bg-slate-300 md:px-2 md:py-1"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <input
            onChange={handleinputChange}
            type="text"
            className="w-full mx-6 md:mx-12 bg-inputColor text-black border-red-500 rounded-lg p-2 flex flex-start"
            placeholder="Search for men, women and children shoes"
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
