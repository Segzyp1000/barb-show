import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import ads from "../assets/ads.png";
import { auth } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Signin = () => {
  const { signin } = useContext(AuthContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      signin(true);
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      if (err.code === "auth/user-not-found") {
        setError("Email not found. Please register first.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError(
          "Either email or password is wrong, kindly check and sign in again"
        );
      }
    }
  };

  return (
    <div className="py-12">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center items-center contain container  pb-12"
      >
        <div className="border-b border-gray-900/10 p-10 pb-12 my-40 max-2xl:my-20 w-4/5 bg-white ">
          <img src={Logo} alt="" className="w-[151px]" />

          <h2 className="text-3xl font-semibold leading-7 text-gray-900 mt-20">
            Sign in
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email/Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-inputColor border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-inputColor border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            onClick={signIn}
            className="mt-5 bg-navColor p-5 font-bold block border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white hover:bg-slate-400"
          >
            Sign in
          </button>
          <div className="text-navColor hover:bg-slate-50 pt-5">
            <Link to="/register">click here to register</Link>
          </div>
        </div>
      </form>
      <div className="flex justify-between items-center">
        <img src={ads} alt="" className="w-[151px] mt-20 ml-auto md:ml-0" />
        <img src={ads} alt="" className="hidden w-[151px] mt-20 md:flex" />
        <img src={ads} alt="" className="hidden w-[151px] mt-20 md:flex" />
      </div>
    </div>
  );
};

export default Signin;
