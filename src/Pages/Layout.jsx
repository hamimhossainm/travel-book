import React from "react";
import Navbar from "../Components/Navbar/Index";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Index";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
