import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ShoppingCart, BookHeart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const { cartProducts } = useContext(ProductContext);
  const totalPrducts = cartProducts?.length;

  const isActive = (path) => pathname === path;
  return (
    <nav
      className={` ${isActive("/") ? "bg-purple-500" : "bg-white"} ${
        isActive("/") ? "text-white" : "text-zinc-800"
      } mt-5 rounded-tl-xl rounded-tr-xl w-full flex items-center justify-between p-4`}
    >
      <div>
        <Link
          to="/"
          className={`${
            isActive("/") ? "text-white" : "text-neutral-900"
          } text-3xl max-sm:text-sm font-bold`}
        >
          Gadget Heaven
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Link
          to="/"
          className={`${
            isActive("/") ? "text-white" : "text-zinc-800"
          } text-lg max-sm:text-sm ${isActive("/") ? "underline" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/statistics"
          className={`${
            isActive("/statistics") ? "text-purple-500" : ""
          } text-lg max-sm:text-sm`}
        >
          Statistics
        </Link>
        <Link
          to="/dashboard"
          className={`${
            isActive("/dashboard") ? "text-purple-500" : ""
          } text-lg max-sm:text-sm`}
        >
          Dashboard
        </Link>
        <Link
          to="/faq"
          className={`${
            isActive("/faq") ? "text-purple-500" : ""
          } text-lg max-sm:text-sm`}
        >
          FAQ&apos;s
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex items-center justify-center p-2 border border-zinc-400 rounded-full bg-white">
          <span className="absolute -top-3 -right-1 text-red-500 font-bold">
            {totalPrducts}
          </span>
          <ShoppingCart className="text-zinc-900" />
        </div>
        <div className="flex items-center justify-center p-2 border  border-zinc-400 rounded-full bg-white">
          <BookHeart className="text-zinc-900" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
