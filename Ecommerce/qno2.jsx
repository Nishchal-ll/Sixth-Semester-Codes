import React, { useState } from "react";

export default function ProductCartApp() {
  // Hard-coded product list
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 20 },
    { id: 3, name: "Keyboard", price: 30 },
  ];

  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>E-commerce: Product List & Cart</h2>

      {/* Product List */}
      <h3>Products</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => addToCart(p)} style={{ marginLeft: "10px" }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      {/* Cart Items */}
      <h3>Cart Items</h3>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((c, index) => (
            <li key={index}>
              {c.name} - ${c.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
