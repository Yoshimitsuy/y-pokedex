import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import { higherFirstL } from '../helpers/helper';

export const PokemonPage = () => {

  const { getPokemonById } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async(id) => {
    const data = await getPokemonById(id);

    setPokemon(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchPokemon(id);
  }, []);
  

  return (
    <main className='container main-pokemon'>
      { 
        loading ? (
          <Loader /> 
        ) : (
              <>

                <div className='header-main-pokemon'>

                  <span className='number-pokemon'>#{ pokemon.id }</span>
                  <div className='container-img-pokemon'>
                    <img 
                      src={ pokemon.sprites.other.dream_world.front_default } 
                      alt={ `Pokemon ${ pokemon.name } `}
                    />
                  </div>

                  <div className='container-info-pokemon'>

                    <h1>{higherFirstL(pokemon.name)}</h1>
                    <div className='card-types info-pokemon-type'>
                      { pokemon.types.map(type => (
                        <span
                          key={type.type.name}
                          className={`${type.type.name}`}
                        >
                          { type.type.name }
                        </span>
                      ))}
                    </div>

                    <div className='info-pokemon'>

                      <div className='group-info'>
                        <p>height</p>
                        <span>{ pokemon.height }m</span>
                      </div>

                      <div className='group-info'>
                        <p>weight</p>
                        <span>{ pokemon.weight }kg</span>
                      </div>

                    </div>

                  </div>

                </div>

                <div className='container-stats'>

                  <h1>status</h1>
                  <div className='stats'>

                    <div className='stat-group'>
                      <span>hp</span>
                      <div className='progress-bar'></div>
                      <span className='counter-stat'>
                      { pokemon.stats[0].base_stat }
                      </span>
                    </div>

                    <div className='stat-group'>
                      <span>attack</span>
                      <div className='progress-bar'></div>
                      <span className='counter-stat'>
                      { pokemon.stats[1].base_stat }
                      </span>
                    </div>

                    <div className='stat-group'>
                      <span>defense</span>
                      <div className='progress-bar'></div>
                      <span className='counter-stat'>
                      { pokemon.stats[2].base_stat }
                      </span>
                    </div>

                    <div className='stat-group'>
                      <span>special attack</span>
                      <div className='progress-bar'></div>
                      <span className='counter-stat'>
                      { pokemon.stats[3].base_stat }
                      </span>
                    </div>

                    <div className='stat-group'>
                      <span>special defense</span>
                      <div className='progress-bar'></div>
                      <span className='counter-stat'>
                      { pokemon.stats[4].base_stat }
                      </span>
                    </div>

                    <div className='stat-group'>
                      <span>speed</span>
                      <div className='progress-bar'></div>
                      <span className='counter-stat'>
                      { pokemon.stats[5].base_stat }
                      </span>
                    </div>

                  </div>

                </div>

            </>
        )}
    </main>
  )
}
