import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext';

export const FilterBar = () => {

  const { active } = useContext(PokemonContext)

  return (
    <div className={`container-filters ${active ? 'active' : ''}`}>

      <div className="filter-by-type">
        <span>type</span>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="grass">grass</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='fire'
            id='fire'
          />
          
          <label htmlFor="fire">fire</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='bug'
            id='bug'
          />
          
          <label htmlFor="bug">bug</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='fairy'
            id='fairy'
          />
          
          <label htmlFor="fairy">fairy</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='dragon'
            id='dragon'
          />
          
          <label htmlFor="dragon">dragon</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='ghost'
            id='ghost'
          />
          
          <label htmlFor="ghost">ghost</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='ground'
            id='ground'
          />
          
          <label htmlFor="ground">ground</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='normal'
            id='normal'
          />
          
          <label htmlFor="normal">normal</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='psychic'
            id='psychic'
          />
          
          <label htmlFor="psychic">psychic</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='steel'
            id='steel'
          />
          
          <label htmlFor="steel">steel</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='dark'
            id='dark'
          />
          
          <label htmlFor="dark">dark</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='electric'
            id='electric'
          />
          
          <label htmlFor="electric">electric</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='fighting'
            id='fighting'
          />
          
          <label htmlFor="fighting">fighting</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='flying'
            id='flying'
          />
          
          <label htmlFor="flying">flying</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='ice'
            id='ice'
          />
          
          <label htmlFor="ice">ice</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='poison'
            id='poison'
          />
          
          <label htmlFor="poison">poison</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='rock'
            id='rock'
          />
          
          <label htmlFor="rock">rock</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='water'
            id='water'
          />
          
          <label htmlFor="water">water</label>
        </div>

      </div>

    </div>
  )
};
