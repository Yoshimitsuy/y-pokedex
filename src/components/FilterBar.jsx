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
          
          <label htmlFor="">grass</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">fire</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">bug</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">fairy</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">dragon</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">ghost</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">earth</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">normal</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">psychic</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">steel</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">sinister</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">electric</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">struggle</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">flying</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">ice</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">poison</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">stone</label>
        </div>

        <div className='group-type'>
          <input
            type="checkbox"
            name='grass'
            id='grass'
          />
          
          <label htmlFor="">water</label>
        </div>

      </div>

    </div>
  )
};
