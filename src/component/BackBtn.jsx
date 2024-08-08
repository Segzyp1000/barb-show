import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

function BackBtn() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex mt-10 text-center items-center justify-center">
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-bounce"
      >
        <FaArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
}

export default BackBtn;
