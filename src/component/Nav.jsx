import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

<<<<<<< HEAD
function Nav({ handleinputChange }) {
  return (
    <div className="text-navColor">
      <div className="flex justify-between items-center p-2 mx-0 md:mx-9 ">
        <img src={Logo} alt="" className="w-[121px] md:w-[150px]" />
=======
function Nav() {
  return (
    <div className="text-navColor block w-full bg-white">
      <div className="flex justify-between items-center p-2 mx-0 md:mx-9">
        <Link to="/">
          <img src={Logo} alt="" className="w-[121px] md:w-[150px]" />
        </Link>
>>>>>>> master
        <div className="flex flex-end space-x-3">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <Link
            to="/signin"
            className="bg-black text-white px-1 rounded-lg hover:bg-slate-300"
          >
            Sign In
          </Link>
        </div>
      </div>
<<<<<<< HEAD

      <div className="border-b border-slate-300"></div>
      <div className="mt-5 flex justify-center items-center">
        <input
          onChange={handleinputChange}
          type="text"
          className="w-full mx-6 md:mx-12 bg-inputColor text-black border-red-500 rounded-lg p-2 flex flex-start"
          placeholder="Search for men, women and children shoes"
        />
      </div>
=======
      <div className="border-b border-slate-300"></div>
>>>>>>> master
    </div>
  );
}

export default Nav;
