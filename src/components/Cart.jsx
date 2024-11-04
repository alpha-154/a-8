import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { Shuffle } from "lucide-react";
import CartItem from "./CartItem";
import Modal from "./Modal";

const Cart = () => {
  const { cartProducts, setCartProducts, totalCost, sortCartByPrice } =
    useContext(ProductContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCartProducts([]);
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto mt-5 px-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-neutral-900 font-bold">Cart</h1>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-lg max-sm:ml-5 max-sm:text-sm text-neutral-900">
              Total Cost: ﹩{totalCost}{" "}
            </h1>
            <div
              onClick={sortCartByPrice}
              className="flex gap-2 items-center justify-center bg-white text-purple-500 max-sm:px-2 max-sm:py-1 max-sm:text-sm px-4 py-2 border border-purple-500 rounded-full"
            >
              <button className="">Sort by Price </button>
              <Shuffle />
            </div>

            <button
              onClick={handlePurchase}
              className={`${
                totalCost > 0
                  ? "bg-purple-500 text-white"
                  : "pointer-events-none cursor-not-allowed bg-gray-400 text-neutral-900"
              }   px-4 py-2 border border-purple-500 rounded-full`}
            >
              Purchase
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-5 mt-5">
          {cartProducts.length === 0 && (
            <h1 className="text-2xl text-neutral-900 font-bold">
              Cart is Empty
            </h1>
          )}
          {cartProducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      {isModalOpen && <Modal onClose={closeModal} totalCost={totalCost} />}
    </div>
  );
};

export default Cart;
