import React, { useState } from "react";

export default function WishlistApp() {
  // Simple product list
  const products = [
    { id: 1, name: "Watch", price: 100 },
    { id: 2, name: "Shoes", price: 80 },
    { id: 3, name: "Bag", price: 40 },
  ];

  const [wishlist, setWishlist] = useState([]);

  // Add to wishlist
  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>E-commerce: Wishlist Feature</h2>

      {/* Product List */}
      <h3>Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button
              onClick={() => addToWishlist(p)}
              style={{ marginLeft: "10px" }}
            >
              Add to Wishlist
            </button>
          </li>
        ))}
      </ul>

      {/* Wishlist */}
      <h3>Wishlist Items</h3>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <ul>
          {wishlist.map((w, index) => (
            <li key={index}>
              {w.name} - ${w.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
