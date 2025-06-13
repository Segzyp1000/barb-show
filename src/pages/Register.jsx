import React, { useState } from "react";
import { auth } from "../config/Firebase";
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
    if (email && password) {
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
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <div className="w-full ">
      <form type="POST" className="py-16 pb-16">
        <div className="border-b border-gray-900/10 p-10 mx-auto w-full md:w-3/5 bg-white container">
          <p className="text-3xl font-bold text-gray-900">Sign up</p>
          <h1 className=" font-semibold leading-7 text-[16px] text-gray-800 mt-20">
            Fill your information to register
          </h1>
          <div className="mt-10 flex flex-col gap-5">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  placeholder="Fill in your preferred name"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md bg-inputColor border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  placeholder="example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-inputColor border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full rounded-md bg-inputColor border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {error && <p className="text-red-700">{error}</p>}
          <button
            onClick={handleSubmit}
            type="submit"
            className="text-white bg-navColor px-7 py-2 rounded-xl mb-12 hover:slate mt-10"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
