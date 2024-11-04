import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className="max-w-7xl mx-auto bg-white">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
