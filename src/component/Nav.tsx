import { useContext } from "react";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext";
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoMdContact } from "react-icons/io";

function Nav() {
  const cart = useContext(CartContext);
  const location = useLocation();
  const [user] = useAuthState(auth);

  // Hide Nav on these pages
  if (
    ["/signin", "/register", "/checkout"].includes(location.pathname)
  ) {
    return null;
  }

  const productCount =
    cart.items && cart.items.length > 0
      ? cart.items.reduce((sum, product) => sum + product.quantity, 0)
      : 0;

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-white/80 backdrop-blur-md shadow-md">
      <div className="p-3">
        <div className="container flex justify-between items-center px-5">
          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              loading="lazy"
              alt="Logo"
              className="w-[7rem] md:w-[9rem] transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </Link>

          {/* Right side controls */}
          <div className="flex gap-2 md:gap-5 items-center">
            {/* Sign In / Out */}
            {user ? (
              <div className="flex items-center gap-2">
                <IoMdContact className="size-7 text-gray-700" />
                <button
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link to="/signin">
                <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-400 transition-colors">
                  Sign in
                </button>
              </Link>
            )}

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center">
              <FaShoppingCart
                size={28}
                className="text-gray-800 hover:text-gray-900 transition-transform hover:scale-105"
              />
              
              {/* 👇 Show badge ONLY when count > 0 */}
              {productCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md border border-white">
                  {productCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
