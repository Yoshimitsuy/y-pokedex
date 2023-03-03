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
    valueSearch: ''
  })

  // simple states
  const [ loadng, setloadng ] = useState(true);
  const [ active, setactive ] = useState(false);

  // get 50 pokemóns
  const getAllPokemons = async(limit = 50) => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon?limit=${limit}$offset=${offset}`);
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
    setloadng(false);
  }

  // all pokemons
  const getGlobalPokemons = async() => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async(pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setloadng(false);
  };

  // get pokemon by ID
  const getPokemonById = async(id) => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();

    const promises = data.results.map(async(pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    getPokemonById(results);
  };


  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    getGlobalPokemons();
  }, []);
  

  return (
    <PokemonContext.Provider 
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonById
      }}
    >
      { children }
    </PokemonContext.Provider>
  )
};
