import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext';

export const FilterBar = () => {

  const { active, handleCheckbox } = useContext(PokemonContext)

  return (
    <div className={`container-filters ${active ? 'active' : ''}`}>

      <div className="filter-by-type">
        <span>type</span>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="grass">grass</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='fire'
            id='fire'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="fire">fire</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='bug'
            id='bug'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="bug">bug</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='fairy'
            id='fairy'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="fairy">fairy</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='dragon'
            id='dragon'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="dragon">dragon</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='ghost'
            id='ghost'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="ghost">ghost</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='ground'
            id='ground'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="ground">ground</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='normal'
            id='normal'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="normal">normal</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='psychic'
            id='psychic'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="psychic">psychic</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='steel'
            id='steel'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="steel">steel</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='dark'
            id='dark'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="dark">dark</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='electric'
            id='electric'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="electric">electric</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='fighting'
            id='fighting'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="fighting">fighting</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='flying'
            id='flying'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="flying">flying</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='ice'
            id='ice'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="ice">ice</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='poison'
            id='poison'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="poison">poison</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='rock'
            id='rock'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="rock">rock</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='water'
            id='water'
            onChange={ handleCheckbox }
          />
          
          <label htmlFor="water">water</label>
        </div>

      </div>

    </div>
  )
};
