import React ,  { useState } from "react";
import { handleAddToCart } from "@/utils/handleAddCart";
const ClientProductDetails = ({ product, addToCart }) => {
  const [showAlert, setShowAlert] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-lg text-gray-600">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="border rounded-lg shadow-lg p-6 w-full md:w-3/4 lg:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain mb-4 rounded-md"
        />
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-green-500 mb-4">{product.price}$</p>
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={() => handleAddToCart(product, addToCart, setShowAlert)}
        >
          Add to Cart
        </button>
        {showAlert && (
        <div
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 p-4 mb-4 text-lg text-red-600 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 shadow-lg"
          role="alert"
        >
          {product.title} has been added to your cart!
        </div>
      )}
      </div>
    </div>
  );
};

export default ClientProductDetails;
