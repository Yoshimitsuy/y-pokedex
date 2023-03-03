import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';

export const PokemonList = () => {

  const { allPokemons } = useContext(PokemonContext) // aqui deu merda
  return (
    <>

      <div className="card-list-pokemon container">

        { allPokemons.map(pokemon => (
          <CardPokemon pokemon={ pokemon } key={ pokemon.id }/>
        )) };

      </div>

    </>
  )
}
