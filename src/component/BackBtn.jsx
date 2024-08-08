import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BackBtn() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex mt-10 text-center items-center justify-center">
      <button onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
    </div>
  );
}

export default BackBtn;
