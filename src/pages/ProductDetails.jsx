import React, { useContext, useState } from "react";
import { products } from "../data";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { BookHeart, ShoppingCart } from "lucide-react";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart, addToWishList } = useContext(ProductContext);
  const product = products.find((product) => product.product_id === id);
  const rating = Math.floor(product.rating);

  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isWishlistClicked, setIsWishlistClicked] = useState(false);

  function renderStars(rating) {
    return "⭐️".repeat(rating);
  }

  const handleAddToCart = (product) => {
    toast.success("Product added to cart!");
    addToCart(product);
    setIsCartClicked(true);
  };

  const handleAddToWishList = (product) => {
    toast.success("Product added to wishlist!");
    addToWishList(product);
    setIsWishlistClicked(true);
  };

  return (
    <div className=" min-h-screen w-full">
      <div className="min-w-4xl min-h-[400px] bg-purple-500 mx-auto text-center text-white rounded-lg p-5 z-0">
        <h1 className="text-3xl font-bold mt-10">Product Details</h1>
        <p className="text-xl mt-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="-mt-20 min-w-2xl max-w-3xl min-h-[400px] bg-white mx-auto text-neutral-300 p-5 border border-zinc-200 rounded-md z-10 flex gap-10 items-center justify-start shadow-lg">
        <div className="basis-1/2">
          <img
            src={product.product_image}
            alt="product_image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-2xl text-neutral-900 font-bold">
            {product.product_title}
          </h1>
          <h1 className="text-md text-neutral-900">Price: ﹩{product.price}</h1>
          <h1 className="text-md text-zinc-500">{product.description}</h1>
          <span className="text-green-400 border border-green-400 rounded-lg p-1 bg-lime-100 text-sm">
            In Stock
          </span>
          <h1 className="text-md text-neutral-900">Specification</h1>
          {product.specification.map((specification, index) => (
            <li key={index} className="text-sm text-zinc-500">
              {specification}
            </li>
          ))}
          <h1 className="text-md text-neutral-900">Ratings ⭐️</h1>
          {renderStars(rating)}
          <div className="flex gap-5 justify-start items-center">
            <div
              onClick={() => handleAddToCart(product)}
              className={`flex justify-center items-center gap-2 rounded-lg text-white p-2 cursor-pointer ${
                isCartClicked
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-500"
              }`}
            >
              <button disabled={isCartClicked}>Add to Cart</button>
              <ShoppingCart
                className={isCartClicked ? "text-gray-500" : "text-neutral-900"}
              />
            </div>
            <div
              onClick={() => handleAddToWishList(product)}
              className={`flex justify-center items-center gap-2 rounded-lg text-white p-2 cursor-pointer ${
                isWishlistClicked
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-500"
              }`}
            >
              <button disabled={isWishlistClicked}>Add to Wishlist</button>
              <BookHeart
                className={
                  isWishlistClicked ? "text-gray-500" : "text-neutral-900"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
