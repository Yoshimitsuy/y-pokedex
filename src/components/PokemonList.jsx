import React, { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import { Loader } from './Loader';

export const PokemonList = () => {

  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);
  
  // const [loading, setLoading] = useState(true);
  
  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
              <div className="card-list-pokemon container">
                {
                  filteredPokemons.length ? (
                    <>
                      { 
                        filteredPokemons.map(pokemon => (
                        <CardPokemon pokemon={ pokemon } key={ pokemon.id }/>
                        )) 
                      }
                    </>

                  ) : (

                    <>
                      { 
                        allPokemons.map(pokemon => (
                        <CardPokemon pokemon={ pokemon } key={ pokemon.id }/>
                        )) 
                      }
                    </>
                  )
                }
              </div>
        )
      }
    </>
  );
};
