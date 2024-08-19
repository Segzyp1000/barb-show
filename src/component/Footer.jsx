import React from "react";
import Logo2 from "../assets/Logo2.png";
import { Link } from "react-router-dom";

function Footer({ handleinputChange }) {
  return (
    <div className="flex flex-col w-auto mt-10 bg-navColor">
      <div className="mt-10 mx-2 md:mx-20 flex justify-between">
        <div>
          <a href="">
            <img src={Logo2} alt="" className="w-[121px]" />
          </a>
        </div>
        <div>
          <input
            onChange={handleinputChange}
            type="text"
            placeholder="search for shoes"
            className="bg-white text-black flex items-center p-1 rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-between space-x-3 text-white mt-10 md:w-4/5 w-auto  mx-auto">
        <ul className="space-y-2">
          <h1 className="font-bold text-[12px] md:text-[20px]">Company</h1>
          <li className="text-[10px] md:text-[13px] font-light text-gray-300">
            <Link to="/about">About us</Link>
          </li>
          <li className="text-[10px] md:text-[13px]  font-light text-gray-300">
            <a href="">Our Client</a>
          </li>
          <li className="text-[10px] md:text-[13px]  font-light text-gray-300">
            <a href="">News</a>
          </li>
        </ul>
        <ul className="space-y-2">
          <h1 className="font-bold text-[12px] md:text-[20px]">Help</h1>
          <li className="text-[10px] md:text-[13px] font-light text-gray-300">
            <a href="">FAQ</a>
          </li>
          <li className="text-[10px] md:text-[13px]  font-light text-gray-300">
            <a href="">Help</a>
          </li>
          <li className="text-[10px] md:text-[13px]  font-light text-gray-300">
            <a href="">Terms</a>
          </li>
        </ul>
        <ul className="space-y-2 ">
          <h1 className="font-bold text-[12px] md:text-[20px]">Socials</h1>
          <li className="text-[10px] md:text-[13px]  font-light text-gray-300">
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li className="text-[10px] md:text-[13px]  font-light text-gray-300">
            <a href="https://www.tiktok.com">Tiktok</a>
          </li>
          <li className="text-[10px] md:text-[13px]  font-light text-gray-300">
            <a href="https://www.instagram.com">Instagram</a>
          </li>
        </ul>
        <ul className="space-y-2">
          <h1 className="font-bold text-[12px] md:text-[20px]">Contact</h1>
          <li className="text-[10px] md:text-[13px] font-light text-gray-300">
            <a href="">25,Alebiosu Street, mile12</a>
          </li>
          <li className="text-[10px] md:text-[13px]  font-light text-gray-300">
            <a href="tel:+2347031160923">+2347031160923</a>
          </li>
          <li className="text-[10px] md:text-[13px]">
            <a
              href="mailto:segunolo@gmail.com"
              className=" font-light text-gray-300"
            >
              segunolo@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="text-slate-300 bg-blue-950 text-[12px] mt-10 flex justify-center items-center p-3 font-light">
        Copyright 2024. All Right Reserverd
      </div>
    </div>
  );
}

export default Footer;
