import React from "react";
import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  console.log("image", banner);
  return (
    <section className="bg-purple-500 text-white flex flex-col items-center p-8 sm:p-16 lg:px-24 rounded-bl-xl rounded-br-xl">

      <div className="text-center max-w-2xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-wider">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-md sm:text-md lg:text-lg mb-6 tracking-wide text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Link to={"/dashboard"}>
          <button className="bg-white text-purple-500 px-6 py-2 rounded-full font-semibold text-lg sm:text-xl hover:bg-purple-200 transition duration-300">
            Shop Now
          </button>
        </Link>
      </div>


      <div className="mt-8 sm:mt-12 max-w-xl w-full">
        <div className="bg-white rounded-lg p-4">
          <img
            src={banner}
            alt="VR Headset"
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
