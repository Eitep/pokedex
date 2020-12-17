import React, { useEffect } from 'react';

import './PokemonDetails.css';

const PokemonDetails = ({ name, index, weight, height, id, type }) => {

  index = id;
  weight = Math.round(weight / 4.53592);
  height = Math.round(height * 3.93701) 

  if (id  < 10) {
    index = "00" + index;
  } else if (id < 100 && id > 9) {
    index = "0" + index;
  } 

  return (
    <div className="pokemon-details">
      <h1 className="pokemon-details-title">{name}</h1>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`} />
      <div className="grid-container">
        <div className="ui two column centered grid">
          <div className="four column centered row">
            <div className="column">
              Weight: {weight}lbs
            </div>
            <div className="column">
              Type: <img className="ui avatar image type" src={`${process.env.PUBLIC_URL}/assets/types/${type}.png`}/>{type}
            </div>
          </div>
          <div className="four column centered row">
            <div className="column">
              Height: {Math.floor(height / 12)}ft {height % 12}in
            </div>
            <div className="column">
              Id: {id}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;