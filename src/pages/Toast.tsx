import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-600" : "bg-red-600";

  return (
    <div className={`fixed top-5 right-5 z-[100] flex items-center px-6 py-3 rounded-xl shadow-2xl text-white transform transition-all duration-500 animate-bounce-in ${bgColor}`}>
      <span className="mr-2">{type === "success" ? "✅" : "❌"}</span>
      <p className="font-bold text-sm">{message}</p>
    </div>
  );
};

export default Toast;