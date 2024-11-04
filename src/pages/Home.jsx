import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Gadget Heaven";
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
    </div>
  );
};

export default Home;
