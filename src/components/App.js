import React, { useState, useEffect } from 'react';

import './App.css';
import NavBar from './NavBar';
import PokemonDetails from './PokemonDetails';
import PokemonList from './PokemonList';
import Pokemon from '../Pokemon';

const App = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState(list);
  const [idList, setIdList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('Bulbasaur');
  const [searchTerm, setSearchTerm] = useState('');
  const [index, setIndex] = useState(null);
  const [weight, setWeight] = useState(69);
  const [height, setHeight] = useState(7);
  const [type, setType] = useState("grass");
  const [id, setId] = useState(1);   
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 700;
      if (ismobile !== isMobile) {
        setIsMobile(ismobile);
      }
    }, false);
  }, [isMobile]);

  useEffect(() => {
    const filteredIdList = [];
    const renderedList = list.filter((item, index) => {
      if (item.name.slice(0, searchTerm.length) === searchTerm.toLowerCase()) {
        console.log(index);
        filteredIdList.push(index + 1);
        return item.name;
        
      }
    });
    setIdList(filteredIdList);
    setFilteredList(renderedList);


  }, [searchTerm])

  useEffect(() => {
    const idArray = [];

    for (let x = 1; x <= 898; x++){
      idArray.push(x);
    };
    pokemonList();
    setIdList(idArray);
    
  }, []);


  const pokemonList = async () => {
    const {data} = await Pokemon.get('/pokemon?limit=898');
    setList(data.results);
    setFilteredList(data.results);
  };

  const onPokemonSelect = (name, index) => {
    setSelectedPokemon(name);
    setIndex(index);

    Pokemon.get(`/pokemon/${name.toLowerCase()}`)
      .then((data) => {
        setWeight(data.data.weight);
        setHeight(data.data.height);
        setType(data.data.types[0].type.name);
        setId(data.data.id);
      });
  };

  const onInputChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app">
      <NavBar />
      <div className="ui grid">
        <div className={isMobile ? "sixteen wide column" : "two column row"}>
          <div className="column pokemon-details-container">
            {
              isMobile ? 
                <PokemonList
                  searchTerm={searchTerm} 
                  onInputChangeHandler={onInputChangeHandler} 
                  onPokemonSelect={onPokemonSelect} 
                  list={filteredList}
                  idList={idList}
                /> :
                <PokemonDetails 
                  name={selectedPokemon} 
                  index={index} 
                  weight={weight} 
                  height={height} 
                  id={id} 
                  type={type}
                />
            }
          </div>
          <div className="column pokemon-list-container">
          {
              isMobile ? 
                <PokemonDetails 
                    name={selectedPokemon} 
                    index={index} 
                    weight={weight} 
                    height={height} 
                    id={id} 
                    type={type}
                  />:
                <PokemonList
                  searchTerm={searchTerm} 
                  onInputChangeHandler={onInputChangeHandler} 
                  onPokemonSelect={onPokemonSelect} 
                  list={filteredList}
                  idList={idList}
                />
            }
          </div>

        </div>
      </div>

    </div>
  );
};

export default App;