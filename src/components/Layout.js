import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
