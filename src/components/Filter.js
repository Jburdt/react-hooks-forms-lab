import React, { useState } from "react";


function Filter({ onCategoryChange, selectedCategory, onSearchChange, search }) {
  // const [search, setSearch]= useState("")

  function handleChange(e) {
    onSearchChange(e.target.value) 
  }


  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={handleChange}/>
      <select name="filter" onChange={onCategoryChange} value={selectedCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
