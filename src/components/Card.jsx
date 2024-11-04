import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ product }) {
  const navigate = useNavigate();
  //console.log("image", product.product_image)
  const handleProductClick = () => {
    navigate(`/product/${product.product_id}`);
  };
  return (
    <div className="w-full flex flex-col gap-2 justify-start p-4 bg-white rounded-lg shadow-md">
      <div className="max-w-[400px] max-h-[300px]">
        <img
          src={product.product_image}
          alt="laptop image"
          className="w-full max-h-[300px]"
        />
      </div>

      <h1 className="text-xl font-bold text-neutral-900">
        {product.product_title}
      </h1>
      <p className="text-md text-neutral-600">Price: {product.price}＄</p>
      <button
        onClick={handleProductClick}
        className="bg-white text-purple-500 px-4 py-2 border border-purple-500 rounded-lg"
      >
        View Details
      </button>
    </div>
  );
}

export default Card;
