import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import ads from "../assets/ads.png";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider, facebookProvider } from "../config/Firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Signin = () => {
  const { signin } = useContext(AuthContext);

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("true");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      signin(true);
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      setError("true");
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
      signin(true);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  const signInWithFacebook = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, facebookProvider);
      signin(true);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-b border-gray-900/10 p-10 m-auto mt-20 w-4/5 bg-white ">
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
        <button
          onClick={signIn}
          className="mt-5 bg-navColor w-full font-bold block border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white hover:bg-slate-400"
        >
          Sign in
        </button>
        {error && <p className="text-red-700">Kindly check your fields</p>}

        <div className="flex justify-center py-2 font-bold">or</div>
      </div>
      <div className="flex justify-center items-center mt-10 space-x-12 space-y-3  py-2">
        <button
          onClick={signInWithGoogle}
          className=" md:text-[20px] text-[15px] border-b-4 bg-white border-navColor rounded-full p-4 flex gap-2"
        >
          <FcGoogle /> Sign in with google
        </button>
        <button
          onClick={signInWithFacebook}
          className="md:text-[20px] text-[15px] border-b-4  bg-white border-navColor rounded-full p-4 flex gap-2"
        >
          <FaFacebookF className="bg-navColor text-white rounded-full" /> Sign
          in with Facebook
        </button>
      </div>
      <img
        src={ads}
        alt=""
        className="flex justify-center items-center mx-auto pb-40 w-[151px] mt-20"
      />
    </form>
  );
};

export default Signin;
