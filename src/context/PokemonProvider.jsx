// import React from 'react'

import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({ children }) => {

  const [ allPokemons, setallPokemons ] = useState([]);
  const [ globalPokemons, setGlobalPokemons ] = useState([]);
  const [ offset, setOffset ] =  useState(0);

  // customHook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  })

  // simple states
  const [ loading, setloading ] = useState(true);
  const [ active, setActive ] = useState(false);

  // get 50 pokemóns
  const getAllPokemons = async(limit = 50) => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();

    const promises = data.results.map(async(pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    setallPokemons([
      ...allPokemons,
      ...results
    ]);
    setloading(false);
  }

  // all pokemons
  const getGlobalPokemons = async() => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async pokemon => {
      const res = await fetch(pokemon.url);
      console.log(res);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setloading(false);
  };

  // get pokemon by ID
  const getPokemonById = async(id) => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();

    return data;
  };


  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  // button load more
  const onClickLoadMore = () => {
    setOffset(offset + 50);
  };

  // filter functions and state
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    fire: false,
    bug: false,
    fairy: false,
    dragon: false,
    ghost: false,
    ground: false,
    normal: false,
    psychic: false,
    steel: false,
    dark: false,
    electric: false,
    fighting: false,
    flying: false,
    ice: false,
    poison: false,
    rock: false,
    water: false,
  });

  const handleCheckbox = (e) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });

    if(e.target.checked) {
      const filteredResults = globalPokemons.filter(pokemon => 
        pokemon.types
          .map(type => type.type.name)
          .includes(e.target.name)
      );
      setFilteredPokemons([...filteredPokemons, ...filteredResults])
    } else {
      const filteredResults = filteredPokemons.filter(pokemon => 
        !pokemon.types
          .map(type => type.type.name)
          .includes(e.target.name)
      );
      setFilteredPokemons([...filteredResults])
    }
  }


  

  return (
    <PokemonContext.Provider 
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonById,
        onClickLoadMore,

        loading,
        setloading,

        active,
        setActive,

        handleCheckbox,
        filteredPokemons,
        
      }}
    >
      { children }
    </PokemonContext.Provider>
  )
};
