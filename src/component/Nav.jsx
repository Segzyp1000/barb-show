import React, { useContext } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext";

function Nav() {
  const cart = useContext(CartContext);

  const productCount =
    cart.items.length > 0
      ? cart.items.reduce((sum, product) => sum + product.quantity, 0)
      : "";

  return (
    <div className="text-navColor block w-full bg-white">
      <div className="flex justify-between items-center p-2 mx-0 md:mx-9">
        <Link to="/">
          <img src={Logo} alt="" className="w-[121px] md:w-[150px]" />
        </Link>
        <div className="flex flex-end space-x-3">
          <Link to="/cart">
            <span className="flex rounded-xl bg-navColor text-white px-1 mt-1">
              <FaShoppingCart className="mr-1" />
              {productCount}
            </span>
          </Link>
          <Link
            to="/signin"
            className="bg-black text-white px-1 rounded-lg hover:bg-slate-300"
          >
            Sign In
          </Link>
        </div>
      </div>
      <div className="border-b border-slate-300"></div>
    </div>
  );
}

export default Nav;
