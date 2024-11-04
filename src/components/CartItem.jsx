import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";
import { CircleX } from "lucide-react";

function CartItem({ product }) {
  const { removeFromCart } = useContext(ProductContext);
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    toast.success("Product removed from cart");
  };

  return (
    <div className="relative w-full flex items-center justify-start gap-6 p-5 border border-zinc-600 rounded-lg">
      <div
        onClick={() => handleRemoveFromCart(product.product_id)}
        className="absolute top-2 right-2 cursor-pointer"
      >
        <CircleX className="text-red-500" />
      </div>
      <div className="max-w-[150px] max-h-[150px] p-2">
        <img
          src={product.product_image}
          alt="productImage"
          className="w-full max-h-[150px] rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold text-neutral-900">
          {product.product_title}
        </h1>
        <h1 className="text-md text-neutral-600">{product.description}</h1>
        <h1 className="text-md text-neutral-800">Price: ﹩{product.price}</h1>
      </div>
    </div>
  );
}

export default CartItem;
