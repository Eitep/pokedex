import React from 'react';

import './PokemonList.css';
import SearchBar from './SearchBar';

const PokemonList = ({ searchTerm, list, onPokemonSelect, onInputChangeHandler, idList }) => {

  const result = Object.assign(list.map((item, index) => ({name: item.name, number: idList[index]})));

  const renderList = result.map((item, index) => {
      const itemName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
      
      return (
        <div onClick={() => onPokemonSelect(itemName, index)} key={itemName} className="item">
          <img 
            className="ui avatar image" 
            src={`${process.env.PUBLIC_URL}/assets/pokemon/${item.number}.png`}
          />
          <div className="content">
            <div className="pokemon-name header">
              {itemName}
            </div>
          </div>
        </div>
      );
  });


  return (
    <div className="pokemon-list">
      <SearchBar searchTerm={searchTerm} onInputChangeHandler={onInputChangeHandler} list={list} className="pokemon-search"/>
      <div className="pokemon-name-list">
        <div className="ui middle aligned animated divided list">
          {renderList}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;