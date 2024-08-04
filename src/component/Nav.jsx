import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Nav({ handleinputChange }) {
  return (
    <div className="text-navColor w-full p-0 md:p-5 lg:p-7">
      <div className="border-b border-slate-300">
        <div className="flex justify-between items-center p-2">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[121px] md:w-[150px]" />
          </Link>
          <div className="flex items-center space-x-3 mt-2 md:mt-0">
            <Link to="/cart" className="text-lg md:text-xl">
              <FaShoppingCart />
            </Link>
            <Link
              to="/signin"
              className="bg-black text-white rounded-lg px-4 py-2 hover:bg-slate-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center items-center">
        <input
          onChange={handleinputChange}
          type="text"
          className="w-full mx-6 md:mx-12 bg-inputColor text-black border border-red-500 rounded-lg p-2"
          placeholder="Search for men, women and children shoes"
        />
      </div>
    </div>
  );
}

export default Nav;
