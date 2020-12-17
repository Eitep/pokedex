import React from 'react';

import './SearchBar.css';


const SearchBar = ({ searchTerm, onInputChangeHandler }) => {


  return(
    <div className="ui action input">
      <input value={searchTerm} onChange={onInputChangeHandler} type="text" placeholder="Search By Name..." />
      <button className="ui button">Search</button>
    </div>
  );
};

export default SearchBar;