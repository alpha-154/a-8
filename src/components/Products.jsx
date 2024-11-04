// Product.jsx
import React, { useState } from "react";
import { products } from "../data";
import Card from "./Card";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Product");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const categories = [
    "All Product",
    "Laptops",
    "Phones",
    "Sunglasses",
    "Watch",
  ];

  // Filter products by category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All Product") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">Explore Cutting-Edge Gadgets</h1>

      <div className="flex w-full max-w-6xl">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 shadow-lg h-fit">
          <ul className="flex flex-col space-y-4">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleCategoryChange(category)}
                  className={`w-full py-2 px-4 rounded-lg text-left ${
                    selectedCategory === category
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products Grid */}
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {filteredProducts.map((product) => (
            <Card key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
