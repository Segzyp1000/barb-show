import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

function Mainlayer() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Mainlayer;
