import React, { useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  function handleChangeCategory(e) {
    setSelectedCategory(e.target.value)
  }
  
  function handleFilter(items) {
    if (selectedCategory === 'All') {
      return items
    } else {
      return items.filter((item) => {
        return selectedCategory === item.category
      })
    }
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChangeCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {handleFilter(items).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}


export default ShoppingList;
