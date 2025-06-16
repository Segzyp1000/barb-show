import { useContext } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext";
import { useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Nav() {
  const cart = useContext(CartContext);
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
      ? cart.items.reduce((sum, product) => sum + product.quantity, 0)
      : "";

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="fixed top-0 left-0 z-20 max-h-48  text-navColor p-1 bg-white w-full backdrop-blur-md ">
      <div className="p-3">
        <div className="flex justify-between  items-center px-5">
          <Link to="/">
            <img
              src={Logo}
              alt=""
              height={151}
              className="w-[7rem] md:w-[10rem] transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </Link>
          <div className="flex gap-2 md:gap-5 flex-end">
            <Link
              to="/signin"
              className="bg-black text-white px-1 rounded-lg hover:bg-gray-200 hover:text-gray-800"
            >
              {user ? (
                <div>
                  <img src={user.googleURL} alt="" />
                  <button
                    className="p-2 md:p-4 text-center overflow-x-hidden"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <button className="p-2 md:p-4 text-center overflow-x-hidden">
                  Sign in
                </button>
              )}
            </Link>
            <Link to="/cart">
              <span className="flex rounded-lg  text-sm bg-navColor hover:bg-gray-900 text-white p-2 md:p-4  mt-1">
                <FaShoppingCart className="mr-1" />
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
