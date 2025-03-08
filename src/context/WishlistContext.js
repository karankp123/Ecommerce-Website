// src/context/WishlistContext.js
import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

const initialWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlist);

  const addToWishlist = (product) => {
    const exists = wishlistItems.find((item) => item.id === product.id);
    if (!exists) {
      const updatedWishlist = [...wishlistItems, product];
      setWishlistItems(updatedWishlist);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    }
  };

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
