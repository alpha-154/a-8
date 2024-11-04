import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white  py-8">
      <div className="max-w-7xl mx-auto px-10">

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Gadget Heaven</h2>
          <p className="text-gray-500">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>


        <div className="flex max-sm:flex-col max-w-3xl mx-auto items-start justify-between max-sm:gap-5 border-t border-gray-200 mt-10 py-10">

          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <Link to="/product-support" className="hover:text-gray-800">
                  Product Support
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="hover:text-gray-800">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/shipping-delivery" className="hover:text-gray-800">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-gray-800">
                  Returns
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <Link to="/about-us" className="hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-gray-800">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-800">
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <Link to="/terms-of-service" className="hover:text-gray-800">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-gray-800">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
