// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { useCart } from '../Context/cartContext';
// import { FaStar } from 'react-icons/fa';

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const { addToCart } = useCart();
//   const router = useRouter();

//   // Fetch products and categories
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//         const uniqueCategories = [...new Set(data.map((product) => product.category))];
//         setCategories(uniqueCategories);
//       });
//   }, []);

//    Handle category filtering
//   const filterByCategory = (category) => {
//     if (category === 'all') {
//       setFilteredProducts(products);
//     } else {
//       setFilteredProducts(products.filter((product) => product.category === category));
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Products</h1>

//       {/* Category Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         <button
//           className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition duration-200"
//           onClick={() => filterByCategory('all')}
//         >
//           All
//         </button>
//         {categories.map((category) => (
//           <button
//             key={category}
//             className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 capitalize transition duration-200"
//             onClick={() => filterByCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition duration-200"
//             onClick={() => router.push(`/products/${product.id}`)} // Navigate to product details
//           >
//             {/* Product Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-48 object-contain mb-4"
//             />
//             {/* Product Title */}
//             <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>

//             {/* Short Description */}
//             <p className="text-gray-600 text-sm mb-3 line-clamp-2">
//               {product.description.slice(0, 50)}...
//             </p>

//             {/* Price and Rating */}
//             <div className="flex justify-between items-center mb-3">
//               <p className="text-lg font-bold text-blue-500">${product.price}</p>
//               <div className="flex items-center text-yellow-400">
//                 <span className="text-sm font-semibold">{product.rating.rate}</span>
//                 <FaStar className="ml-1 text-base" />
//               </div>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//               className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 addToCart(product);
//                 alert(`${product.title} has been added to your cart!`)
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import ClientProducts from '../../components/clientproducts/clientproducts'
import { fetchProductsAndCategories } from "../../utils/fetchProducts";

export async function getServerSideProps() {
  const { products, categories } = await fetchProductsAndCategories();

  return {
    props: {
      products,
      categories,
    },
  };
}

export default function Products({ products, categories }) {
  return <ClientProducts products={products} categories={categories} />;
}


