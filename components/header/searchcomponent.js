'use client';

import React, { useState } from 'react';

export default function SearchComponent({ products }) {
  const [showSearch, setShowSearch] = useState(false); // Toggle search bar visibility
  const [searchTerm, setSearchTerm] = useState(''); // Store search term
  const [filteredProducts, setFilteredProducts] = useState(products || []); // Store filtered results

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products); // Show all products if search is empty
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered); // Update filtered products
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        {/* Toggle Search Button */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="text-black"
        >
          <i className="fa fa-search text-xl"></i>
        </button>

        {/* Search Input */}
        {showSearch && (
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
              className="bg-transparent border-b-2 border-black px-2 py-1 text-black focus:outline-none"
            />
            <button
              onClick={handleSearch} // Trigger search
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Search
            </button>
          </div>
        )}
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description.slice(0, 50)}...</p>
            <p className="text-xl font-bold">${product.price}</p>
          </div>
        ))}
      </div>

      {/* No Results Found */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No products found.</p>
      )}
    </div>
  );
}
