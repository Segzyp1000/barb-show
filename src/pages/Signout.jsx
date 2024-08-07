import React from "react";
import Logo from "../assets/Logo.png";

function Signout() {
  return (
    <form className="w-4/5 p-5 mt-20 mx-auto bg-white">
      <div className="space-y-12">
        <img src={Logo} alt="" className="w-[150px]" />
        <div className="border-b border-navColor "></div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 bg-inputColor text-gray-900 shadow-sm 
               ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
               focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              for="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                className="block 
              w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm bg-inputColor
              ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
              focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                className="block w-full 
              rounded-md border-0 py-1.5 text-gray-900 bg-inputColor shadow-sm ring-1 ring-inset ring-gray-300
               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
                sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              for="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="password"
                id="password"
                autocomplete="password"
                className="block 
              w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm bg-inputColor
              ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
              focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              for="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="confirm password"
                id="confirm password"
                autocomplete="confirm password"
                className="block 
              w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm bg-inputColor
              ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
              focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              for="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>United State</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              for="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="block w-full bg-inputColor rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              for="region"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              State / Province
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="block w-full bg-inputColor rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              for="postal-code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="block w-full  bg-inputColor rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="block w-full bg-navColor rounded-lg p-2  text-white "
          >
            Register
          </button>
        </div>

        <div className="border-b border-navColor"></div>
      </div>
    </form>
  );
}

export default Signout;
