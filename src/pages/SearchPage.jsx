import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {
  const location = useLocation();
  // console.log(location);

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons
    .filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))

    // console.log(filteredPokemons);

  return (
    <div className="container">

      <p className="p-search">
        found <span>{ filteredPokemons.length }</span> results :
      </p>

      <div className="card-list-pokemon container">
        { filteredPokemons.map(pokemon => <CardPokemon pokemon={ pokemon } key={ pokemon.id }/>)}
      </div>
    </div>
  )
}
