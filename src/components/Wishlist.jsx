import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import WishlistItem from "./WishlistItems";

const Wishlist = () => {
  const { wishListProducts } = useContext(ProductContext);
  return (
    <div className="max-w-4xl mx-auto mt-5 px-10">
      <h1 className="text-2xl text-neutral-900 font-bold">Wishlist</h1>
      <div className="w-full flex flex-col items-center gap-5 mt-5">
        {wishListProducts.length === 0 && (
          <h1 className="text-2xl text-neutral-900 font-bold">
            Wishlist is empty
          </h1>
        )}
        {wishListProducts.map((product) => (
          <WishlistItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
