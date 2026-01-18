import React, { useState, useEffect } from "react";
import { auth } from "../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import sneaker from "../assets/sneakers.png";

type StrengthLevel = "Weak" | "Medium" | "Strong" | "";

// --- INLINE TOAST COMPONENT ---
const Toast = ({ message, type, onClose }: { message: string, type: "success" | "error", onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div className={`fixed top-5 right-5 z-[100] flex items-center px-6 py-3 rounded-xl shadow-2xl text-white animate-bounce-in ${bgColor}`}>
      <span className="mr-2">{type === "success" ? "✅" : "❌"}</span>
      <p className="font-bold text-sm">{message}</p>
    </div>
  );
};

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [strength, setStrength] = useState<StrengthLevel>("");

  // --- TOAST STATE ---
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const evaluatePasswordStrength = (pwd: string): StrengthLevel => {
    if (!pwd) return "";
    if (pwd.length < 6) return "Weak";
    if (/[A-Z]/.test(pwd) && /\d/.test(pwd) && pwd.length >= 8) return "Strong";
    return "Medium";
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setStrength(evaluatePasswordStrength(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToast(null);

    if (!username || !email || !password || !confirmPassword) {
      setToast({ message: "Please fill in all fields", type: "error" });
      return;
    }

    if (password !== confirmPassword) {
      setToast({ message: "Passwords do not match", type: "error" });
      return;
    }

    try {
      setIsSubmitting(true);
      await createUserWithEmailAndPassword(auth, email, password);
      
      setToast({ message: "Account created! Welcome to the club 👟", type: "success" });
      
      // Delay navigation so they see the success toast
      setTimeout(() => navigate("/signin"), 1500);
    } catch (err: any) {
      console.error(err);
      let msg = "An unexpected error occurred. Please try again later.";
      
      if (err.code === "auth/weak-password") {
        msg = "Password is too weak. Use a stronger one.";
      } else if (err.code === "auth/email-already-in-use") {
        msg = "Email already in use. Try a different email.";
      }
      
      setToast({ message: msg, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStrengthColor = (): string => {
    switch (strength) {
      case "Weak": return "text-red-500";
      case "Medium": return "text-yellow-500";
      case "Strong": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  const showInstruction = password.length > 0 && (password.length < 6 || !/\d/.test(password));

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      
      {/* --- RENDER TOAST --- */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {/* Left Side Image */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-white-500 to-purple-600">
        <img src={sneaker} alt="Sneaker" className="max-h-[500px] object-contain" loading="lazy" />
      </div>

      {/* Right Side Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="w-32" loading="lazy" />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 text-sm mt-1">Fill in your details to register</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your preferred name"
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  placeholder="••••••••"
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>

              {showInstruction && (
                <p className="text-xs text-red-500 mt-1">Use at least 6 characters including letters and numbers.</p>
              )}

              {strength && (
                <p className={`mt-1 text-sm font-semibold ${getStrengthColor()}`}>Strength: {strength}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                isSubmitting ? "bg-indigo-400 cursor-not-allowed text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
              }`}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-indigo-600 hover:underline font-medium">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;