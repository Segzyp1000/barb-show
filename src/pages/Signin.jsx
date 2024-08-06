import React from "react";
import Logo from "../assets/Logo.png";
import ads from "../assets/ads.png";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <form>
      <div class="border-b border-gray-900/10 p-10 m-auto mt-20 w-4/5  ">
        <img src={Logo} alt="" className="w-[151px]" />

        <h2 class="text-3xl font-semibold leading-7 text-gray-900 mt-20">
          Sign in
        </h2>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Email/Username
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="email"
                id="email"
                autocomplete="email"
                class="block w-full rounded-md bg-inputColor border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="password"
                id="password"
                autocomplete="password"
                class="block w-full rounded-md bg-inputColor border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div></div>
        </div>
        <button className="bg-navColor w-full font-bold block border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white hover:bg-slate-400">
          Sign in
        </button>
        <div className="flex justify-between flex-wrap space-x-3 py-2">
          <button className="text-navColor md:text-[15px] text-[10px] font-semibold hover:text-slate-400">
            Forgot Password?
          </button>
          <Link
            to="/signout"
            className=" md:text-[15px] text-[9px] font-semibold hover:text-slate-400"
          >
            Do you have an account?
          </Link>
        </div>
        <div className="flex justify-center py-2 font-bold">or</div>
      </div>
      <div className="flex flex-wrap justify-around py-2 space-y-3">
        <button className=" md:text-[20px] text-[15px] border-b-4  border-navColor rounded-full p-4 flex gap-2">
          <FcGoogle /> Sign up with google
        </button>
        <button className="md:text-[20px] text-[15px] border-b-4 border-navColor rounded-full p-4 flex gap-2">
          <FaFacebookF className="bg-navColor text-white rounded-full" /> Sign
          up with Facebook
        </button>
        <button className="md:text-[20px] text-[15px] border-b-4 border-navColor rounded-full p-4 flex gap-2">
          <BsFillTelephoneFill className="text-navColor" /> Sign up with Number
        </button>
      </div>
      <img
        src={ads}
        alt=""
        className="flex justify-center items-center mx-auto pb-40 w-[151px] mt-20"
      />
    </form>
  );
}

export default Signin;
