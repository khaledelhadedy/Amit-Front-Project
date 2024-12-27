
// 'use client';
// import React, { createContext, useContext, useState } from 'react';   
// export const cartContext = createContext();
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };
//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };
//   return (
//     <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </cartContext.Provider>
//   );
// };
// export const useCart = () => {
//   const context = useContext(cartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };



'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on initialization
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Update item quantity
  const updateCartItem = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Remove item from cart
  const removeCartItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Total items count
  // const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);
  const totalItems = cart.reduce((total, item) => total + 1, 0);
  // Total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateCartItem,
        removeCartItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

