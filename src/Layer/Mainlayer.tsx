import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav.js";
import Footer from "../component/Footer.js";

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
