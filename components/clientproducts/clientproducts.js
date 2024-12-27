import React, { useState } from 'react';
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";
import { useCart } from "../../pages/Context/cartContext";
import { handleAddToCart } from '@/utils/handleAddCart';

const ClientProducts = ({ products = [], categories = [] }) => {

  
  const router = useRouter();
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const [showAlert, setShowAlert] = useState(null);
  const filterByCategory = (category) => {
    if (category === "all") {
      setFilteredProducts(products); 
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };
  const showProductAlert = (productId) => {
    setShowAlert(productId); 
    setTimeout(() => {
      setShowAlert(null);
    }, 1000);
  };
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
          onClick={() => filterByCategory("all")}
        >
          All
        </button>
        {categories.length > 0 &&
          categories.map((category) => (
            <button
              key={category}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 capitalize transition duration-200"
              onClick={() => filterByCategory(category)}
            >
              {category}
            </button>
          ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition duration-200"
              onClick={() => router.push(`/products/${product.id}`)}
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              {/* Product Title */}
              <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>

              {/* Short Description */}
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description.slice(0, 50)}...
              </p>

              {/* Price and Rating */}
              <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-bold text-blue-500">${product.price}</p>
                <div className="flex items-center text-yellow-400">
                  <span className="text-sm font-semibold">{product.rating.rate}</span>
                  <FaStar className="ml-1 text-base" />
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering onClick for parent
                  handleAddToCart(product, addToCart,() => showProductAlert(product.id))}
                  
                }
              >
                Add to Cart
              </button>
              {showAlert === product.id && (
                <div
                  className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 p-4 mb-4 text-lg text-red-600 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 shadow-lg"
                  role="alert"
                >
                  {product.title} has been added to your cart!
                </div>
              )}
            </div>
            
          ))
        ) : (
          <p className="text-center text-gray-600">No products available</p>
        )}
      </div>
    </div>
  );
};

export default ClientProducts;
