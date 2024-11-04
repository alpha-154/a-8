import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const Dashboard = () => {
  const [active, setActive] = useState("cart");
  const handleClick = (currentActive) => {
    setActive(currentActive);
  };

  useEffect(() => {
    document.title = "Dashboard - Gadget Heaven";
  }, []);

  return (
    <div className=" min-h-screen w-full mx-auto">
      <div className="min-w-4xl min-h-[300px] bg-purple-500 mx-auto text-center text-white rounded-lg p-5 z-0">
        <h1 className="text-3xl max-sm:text-2xl font-bold mt-10">
          Product Details
        </h1>
        <p className="space-x-5 text-xl max-sm:text-md mt-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center items-center gap-5 max-sm:mt-5 mt-10">
          <button
            onClick={() => handleClick("cart")}
            className={`${
              active === "cart"
                ? "bg-white text-purple-500 font-bold border-purple-500 rounded-full"
                : "bg-purple-500 text-white border border-white rounded-full"
            } px-4 py-2 `}
          >
            Add Cart
          </button>
          <button
            onClick={() => handleClick("wishlist")}
            className={`${
              active === "wishlist"
                ? "bg-white text-purple-500 font-bold border-purple-500 rounded-full"
                : "bg-purple-500 text-white border border-white rounded-full"
            } px-4 py-2 `}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="max-w-7xl max-auto p-5">
        {active === "cart" ? <Cart /> : <Wishlist />}
      </div>
    </div>
  );
};

export default Dashboard;
