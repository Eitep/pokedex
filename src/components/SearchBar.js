import React, { useEffect, useState } from 'react';

import './SearchBar.css';
import Pokemon from '../Pokemon';

const SearchBar = ({ searchTerm, onInputChangeHandler }) => {


  return(
    <div className="ui action input">
      <input value={searchTerm} onChange={onInputChangeHandler} type="text" placeholder="Search By Name..." />
      <button className="ui button">Search</button>
    </div>
  );
};

export default SearchBar;