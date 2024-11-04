import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishListProducts, setWishListProducts] = useState([]);

  const addToWishList = (product) => {
    setWishListProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeFromWishList = (productId) => {
    setWishListProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== productId)
    );
  };

  const addToCart = (product) => {
    setCartProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeFromCart = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.product_id !== productId)
    );
  };

  const totalCost = cartProducts.reduce(
    (acc, product) => acc + product.price,
    0
  );

  const sortCartByPrice = () => {
    setCartProducts((prevProducts) =>
      [...prevProducts].sort((a, b) => b.price - a.price)
    );
  };

  return (
    <ProductContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
        totalCost,
        sortCartByPrice,
        addToWishList,
        removeFromWishList,
        wishListProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
