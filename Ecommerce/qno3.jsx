import React, { useState } from "react";

export default function CheckoutApp() {
  // Simple product list
  const products = [
    { id: 1, name: "Phone", price: 500 },
    { id: 2, name: "Headphones", price: 50 },
    { id: 3, name: "Charger", price: 20 },
  ];

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Checkout: move cart items to ordered list
  const checkout = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    setOrders([...orders, ...cart]); // add all cart items to ordered list
    setCart([]); // empty cart
    alert("Checkout successful!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>E-commerce: Cart & Checkout</h2>

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

      {/* Cart */}
      <h3>Cart</h3>
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

      <button onClick={checkout}>Checkout</button>

      {/* Ordered Items */}
      <h3>Ordered Items</h3>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <ul>
          {orders.map((o, index) => (
            <li key={index}>
              {o.name} - ${o.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
