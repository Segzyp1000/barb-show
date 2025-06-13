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
        className="container flex flex-col items-center justify-center m-12 p-10 w-full md:max-w-[70%] mx-auto"
      >
        <div className="w-full bg-white p-7 space-y-10">
          <img src={Logo} alt="" className="w-[151px]" />

          <h2 className="text-3xl font-semibold leading-7 text-gray-900 mt-20">
            Sign in
          </h2>

          <div className="mt-10 flex flex-col space-y-7">
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-md font-medium leading-6 text-gray-900"
              >
                Email/Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full text-2xl p-3 rounded-md bg-inputColor border-0  text-gray-800 shadow-sm placeholder:text-[16px] sm:text-sm sm:leading-6"
                  placeholder="example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-md font-medium leading-6 text-gray-900"
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
                  className="block w-full text-2xl p-3 rounded-md bg-inputColor border-0  text-gray-800 shadow-sm   placeholder:text-[16px]  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            onClick={signIn}
            className="mt-5 bg-navColor text-[20px] md:text[25px] px-5 rounded-xl font-semibold block border-1 py-1.5  ring-gray-300 sm:text-sm sm:leading-6 text-white hover:bg-gray-200 hover:text-gray-800"
          >
            Sign in
          </button>
          <div className="text-navColor cursor-pointer pt-5">
            <Link to="/register">click here to register</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
