import React, { useState } from "react";
import { auth } from "../config/Firebase";
import Logo from "../assets/Logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      navigate("/signin");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/weak-password") {
        setError("Password is too weak. Please use a stronger password.");
      } else if (err.code === "auth/email-already-in-use") {
        setError("Email already in use. Please try a different email.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-auto md:w-1/2 space-y-12 p-5 mt-20 mx-auto bg-white">
        <img src={Logo} alt="" className="w-[150px]" />
        <div className="border-b border-navColor "></div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text- font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 bg-inputColor text-gray-900 shadow-sm 
               ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
               focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text- font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full 
              rounded-md border-0 py-1.5 text-gray-900 bg-inputColor shadow-sm ring-1 ring-inset ring-gray-300
               placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
                sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                autoComplete="password"
                className="block 
              w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm bg-inputColor
              ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
              focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          type="submit"
          className="text-white bg-navColor px-2 rounded-xl mb-12 hover:slate"
        >
          Register
        </button>
      </div>
    </form>
  );
};
export default Register;
