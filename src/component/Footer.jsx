import Logo2 from "../assets/Logo2.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BackBtn from "./BackBtn";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function Footer() {
  const { query, handleInputChange } = useContext(CartContext);
  const location = useLocation();

  if (
    location.pathname === "/signin" ||
    location.pathname === "/register" ||
    location.pathname === "/checkout"
  ) {
    return null;
  }

  return (
    <div className="bg-navColor">
      <div className="flex flex-col container">
        <div className="mt-10 flex flex-col items-center md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 mx-5">
          {/* Logo: only visible on medium (md) and larger screens */}
          <Link
            to="/"
            className="hidden md:block transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img src={Logo2} alt="logo" className="w-[121px]" />
          </Link>

          {/* Search input: always centered on mobile, right-aligned on desktop */}
          <input
            onChange={handleInputChange}
            value={query}
            autoFocus
            type="text"
            name="search"
            placeholder="Search for shoes"
            className="bg-white text-black p-3 w-full max-w-sm rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-5 mx-auto text-white mt-10">
          <ul className="space-y-2">
            <h1 className="font-bold text-[12px] md:text-[20px]">Company</h1>
            <li className="text-[10px] md:text-[13px] font-light text-gray-300">
              <Link to="/about">About us</Link>
            </li>
            <li className="text-[10px] md:text-[13px]  font-light text-gray-300">
              <Link to="/admin">Admin Dashboard</Link>
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
        <BackBtn />
      </div>
      <div className="text-slate-300 bg-blue-950 text-[12px] mt-10 flex justify-center items-center p-3 font-light">
        Copyright 2024. All Right Reserverd
      </div>
    </div>
  );
}

export default Footer;
