// import React, { useContext } from 'react';
// import { cartContext } from '../Context/cartContext';
// import { useCart } from '../Context/cartContext';


// export default function Cart() {
//   const {cartItems ,  updateCartItem, removeCartItem, clearCart } = useContext(cartContext);
//   const {cart} = useCart();
//   console.log('Cart Items:', cartItems); 


//   const totalPrice = cart.reduce((total, item) => {
//     const price = item.price || 0;
//     const quantity = item.quantity || 0;
//     return total + price * quantity;
//   }, 0);

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4">Your Cart</h2>
//       {cart.length > 0 ? (
//         <>
//           <div className="row">
//             {cart.map((item) => (
//               <div key={item.id} className="col-12 mb-3">
//                 <div className="card">
//                   <div className="row g-0 align-items-center">
//                     <div className="col-md-2">
//                       <img src={item.image} alt={item.name} className="img-fluid" />
//                     </div>
//                     <div className="col-md-6">
//                       <div className="card-body">
//                         <h5 className="card-title">{item.name}</h5>
//                         <p className="card-text text-muted">Price: {item.price || 0} EGP</p>
//                         <p className="card-text text-muted">Total: {(item.price || 0) * (item.quantity || 0)} EGP</p>
//                       </div>
//                     </div>
//                     <div className="col-md-4 text-center">
//                       <div className="d-flex justify-content-center align-items-center">
//                         <button
//                           className="btn btn-outline-secondary me-2"
//                           onClick={() => updateCartItem(item.id, (item.quantity || 0) - 1)}
//                           disabled={item.quantity <= 1}
//                         >
//                           -
//                         </button>
//                         <span className="mx-2">{item.quantity || 0}</span>
//                         <button
//                           className="btn btn-outline-secondary me-2"
//                           onClick={() => updateCartItem(item.id, (item.quantity || 0) + 1)}
//                         >
//                           +
//                         </button>
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => removeCartItem(item.id)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-end mt-4">
//             <h4>Total: {totalPrice.toFixed(2)} EGP</h4>
//             <button className="btn btn-warning me-2" onClick={clearCart}>
//               Clear Cart
//             </button>
//             <button className="btn btn-primary">Proceed to Checkout</button>
//           </div>
//         </>
//       ) : (
//         <div className="text-center">
//           <p className="text-muted">Your cart is empty.</p>
//           <a href="/" className="btn btn-primary">Go Shopping</a>
//         </div>
//       )}
//     </div>
//   );
// }



import React from 'react';
import { useCart } from '../Context/cartContext';
import Link from 'next/link';

export default function Cart() {
  const { cart, updateCartItem, removeCartItem, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>

      {cart.length > 0 ? (
        <>
          {/* Cart Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">
                      Total: ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      onClick={() =>
                        updateCartItem(item.id, Math.max((item.quantity || 1) - 1, 1))
                      }
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity || 1}</span>
                    <button
                      className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      onClick={() => updateCartItem(item.id, (item.quantity || 1) + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => removeCartItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Total and Actions */}
          <div className="mt-8 text-right">
            <h4 className="text-2xl font-semibold mb-4">
              Total: ${totalPrice.toFixed(2)}
            </h4>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded mr-4 transition duration-300"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        // Empty Cart State
        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg mb-4">Your cart is empty.</p>
          <Link
            href="/products"
            className="inline-block text-white bg-gray-800 hover:bg-gray-900 px-6 py-2 rounded-md font-medium transition duration-300"
          >
            Go Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

