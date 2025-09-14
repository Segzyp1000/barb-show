import { useContext } from "react";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext";
import type { CartContextType } from "../CartContext";
import { auth } from "../config/Firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

  
function Nav() {
const cart = useContext(CartContext) as CartContextType;
  const location = useLocation();
  const [user, loading] = useAuthState(auth);

  if (
    location.pathname === "/signin" ||
    location.pathname === "/register" ||
    location.pathname === "/checkout"
  ) {
    return null;
  }

  const productCount =
    cart.items.length > 0
      ? cart.items.reduce((sum: number, product: { quantity: number }) => sum + product.quantity, 0)
      : "";

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-white/80 backdrop-blur-md shadow-md">
      <div className="p-3">
        <div className="flex justify-between items-center px-5">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-[7rem] md:w-[9rem] transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </Link>

          <div className="flex gap-2 md:gap-5">
            <Link
              to="/signin"
              className="bg-black text-white px-1 rounded-lg hover:bg-gray-200 hover:text-gray-800"
            >
              {user ? (
                <div>
                  <img src={user.photoURL || ""} alt={user.displayName || "User"} />
                  <button
                    className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </button>
                </div>
              ) : (
               <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Sign in
          </button>
              )}
            </Link>

          <Link to="/cart" className="flex items-center relative">
  <FaShoppingCart size={28} className="text-navColor hover:text-gray-900" />
  <span className="absolute -top-1 -right-4 bg-red-300 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm border-2 border-white shadow-sm animate-pulse">
    {productCount}
  </span>
</Link>



          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
