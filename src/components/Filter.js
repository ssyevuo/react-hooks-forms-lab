import React, {useState, useEffect} from "react";
//import ShoppingList from "./ShoppingList";

function Filter({ onCategoryChange, onSearchChange, search}) {
  const [searchList, setSearchList] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (search !== undefined) {
      setSearchList(search);
    }
  }, [search]);

  const handleSearch = (event) => {
    const newSearchList = event.target.value;
    setSearchList(newSearchList); //update the state
    onSearchChange(newSearchList); //pass the new state to the parent
  }

  const handleCategoryChange = (event) => {
    const  newCategory = event.target.value;
    setSelectedCategory(newCategory); //updates the local state
    onCategoryChange(newCategory); //pass the new state to the parent
  }


  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={searchList} onChange={handleSearch} />
      <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
