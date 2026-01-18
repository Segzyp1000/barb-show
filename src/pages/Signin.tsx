import React, { useState, useContext, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Logo from "../assets/Logo.png";
import { auth } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import sneaker from "../assets/sneakers.png";

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

const Signin: React.FC = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { signin } = authContext;

  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // --- TOAST STATE ---
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setToast(null); // Clear existing toasts

    if (!email.trim() || !password.trim()) {
      setToast({ message: "Please fill in all fields", type: "error" });
      return;
    }

    try {
      setIsSubmitting(true);
      await signInWithEmailAndPassword(auth, email, password);
      
      setToast({ message: "Welcome back! 👟", type: "success" });
      signin();

      // Small delay before redirect so user sees the success toast
      setTimeout(() => navigate("/", { replace: true }), 1000);
      
    } catch (err: any) {
      const code = err?.code;
      let msg = "Either email or password is wrong, kindly check again";

      if (code === "auth/user-not-found") msg = "Email not found. Please register first.";
      else if (code === "auth/wrong-password") msg = "Incorrect password. Please try again.";
      else if (code === "auth/too-many-requests") msg = "Too many login attempts. Try again later.";

      setToast({ message: msg, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container min-h-screen flex flex-col md:flex-row relative">
      
      {/* --- RENDER TOAST --- */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {/* Left side image */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-white-500 to-purple-600">
        <img src={sneaker} alt="Sneaker" loading='lazy' className="max-h-[500px] object-contain" />
      </div>

      {/* Right side form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="flex justify-center">
            <img src={Logo} loading="lazy" alt="Logo" className="w-32" />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1">Sign in to continue</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email / Username</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiOutlineEyeInvisible className="h-5 w-5" /> : <AiOutlineEye className="h-5 w-5" />}
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
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline font-medium">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;