// import React from "react";
// import { useCart } from "../Context/cartContext"; // Import the CartContext hook

// export async function getServerSideProps(context) {
//   const { id } = context.params;

//   try {
//     const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//     const product = await res.json();

//     return {
//       props: { product },
//     };
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return {
//       props: { product: null },
//     };
//   }
// }

// const ProductDetails = ({ product }) => {
//   const { addToCart } = useCart(); // Access addToCart function from the context

//   if (!product) {
//     return (
//       <div className="container mx-auto p-4 text-center">
//         <p className="text-lg text-gray-600">Product not found.</p>
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     addToCart(product); // Add the product to the cart
//     alert(`${product.title} has been added to your cart!`);
//   };

//   return (
//     <div className="container mx-auto p-4 flex justify-center">
//       <div className="border rounded-lg shadow-lg p-6 w-full md:w-3/4 lg:w-1/2">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-64 object-contain mb-4 rounded-md"
//         />
//         <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
//         <p className="text-gray-600 mb-4">{product.description}</p>
//         <p className="text-xl font-bold text-green-500 mb-4">{product.price}$</p>
//         <button
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import ClientProductDetails from "../../components/clientproductdetails/clientproductdetails";
import { useCart } from "../../pages/Context/cartContext";

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();

    return {
      props: { product },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: { product: null },
    };
  }
}

export default function ProductDetailsPage({ product }) {
  const { addToCart } = useCart(); // Access addToCart from the context

  return <ClientProductDetails product={product} addToCart={addToCart} />;
}
