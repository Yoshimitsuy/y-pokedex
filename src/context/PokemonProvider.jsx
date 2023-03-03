// import React from 'react'

import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({ children }) => {

  

  // get 50 pokemóns
  const getAllPokemons = async (limit = 50) => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon?limit=${limit}$offset=${offset}`)
  }

  return (
    <PokemonContext.Provider 
      value={{
        numero: 0
      }}
    >
      { children }
    </PokemonContext.Provider>
  )
};
