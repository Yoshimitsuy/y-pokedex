import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
// import imgTeste from '../assets/img-teste.svg';

export const Navigation = () => {

  const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/search', {
      state: valueSearch,
    });

    onResetForm();
  }
  
  return (
    <>
      <header className='container'>

        <Link to='/' className='logo'>
          <img
            src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
            alt="Pokedex Logo"
          />
        </Link>

        <form onSubmit={ onSearchSubmit }>

          <div className='form-group'>

            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='icon-search'
              >
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>

            <input
              type='search'
              name='valueSearch'
              id=''
              placeholder='search pokemon name'
              value={ valueSearch }
              onChange={ onInputChange }
            />

          </div>

          <button className='btn-search'>search</button>

        </form>
      </header>

      <Outlet />
    </>
  );
};
