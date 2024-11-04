import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";
import { CircleX } from "lucide-react";

function WishlistItem({ product }) {
  const { addToCart, removeFromWishList } = useContext(ProductContext);
  const handleAddToCart = (productId) => {
    addToCart(productId);
    toast.success("Product added to cart");
  };
  const handleRemoveFromWishList = (productId) => {
    removeFromWishList(productId);
    toast.success("Product removed from wishlist!");
  };

  return (
    <div className="relative w-full flex items-center justify-start gap-6 p-5 border border-zinc-600 rounded-lg">
      <div
        onClick={() => handleRemoveFromWishList(product.product_id)}
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
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-purple-500 text-white px-4 py-2 border border-purple-500 rounded-full max-w-fit text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default WishlistItem;
