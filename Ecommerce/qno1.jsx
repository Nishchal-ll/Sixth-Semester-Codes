import React, { useState } from "react";

export default function CategoryApp() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [itemName, setItemName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Add new category
  const addCategory = () => {
    if (categoryName.trim() === "") return;
    setCategories([...categories, categoryName]);
    setCategoryName("");
  };

  // Add new item to selected category
  const addItem = () => {
    if (itemName.trim() === "" || selectedCategory === "") return;
    setItems([...items, { name: itemName, category: selectedCategory }]);
    setItemName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>E-commerce Category and Items</h2>

      {/* Category Input */}
      <h3>Create Category</h3>
      <input
        type="text"
        placeholder="Enter category"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button onClick={addCategory}>Add Category</button>

      {/* Item Input */}
      <h3>Add Item to Category</h3>
      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button onClick={addItem}>Add Item</button>

      {/* Display Categories */}
      <h3>Category List</h3>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>

      {/* Display Items with Categories */}
      <h3>Items with Categories</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} → <b>{item.category}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
