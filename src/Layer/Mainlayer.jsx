import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";

function Mainlayer() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Mainlayer;
