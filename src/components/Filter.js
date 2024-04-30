import React from "react";

function Filter({ onCategoryChange }) {
  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="category-filter">Filter by Category:</label>
      <select id="category-filter" onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="grocery">Grocery</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
}

export default Filter;
