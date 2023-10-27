/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* Estilos */
//import './Nav.module.css';

/*Dependencias */
import { useState,useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { getPokename } from "../../reudx/actions/actions";
import Card from "../card/Card";

/*Componentes */
//import Button from "../button/Button"


const SearchBar =() => {
    
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);

  const [filteredPokemons, setFilteredPokemons] = useState([]); // para los resultados de la búsqueda


  const onSearchs = async () => {
    if (parseInt(inputValue)) {
      setError("Invalid name");
      return;
    }
    try {
      const response = await dispatch(getPokename(inputValue)); // Realiza la búsqueda por nombre y actualiza el estado global
      
      if (response && response.length > 0) {
        setFilteredPokemons(response); // Actualiza el estado con los resultados de la búsqueda
      } else {
        setError("Pokemon not found");
      }
    } catch (error) {
      setError("Search failed");
    } 
  }
  // const handleSearch = () => {
  //   if (allPokemons.find((pokemon) => pokemon.name === inputValue)) {
  //      dispatch(getPokename(allPokemons));
  //   }
  // }
 
  const handleChange = (event) => {
    setInputValue(event.target.value);
      }
  
  return (
    <div  >
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={onSearchs}>Search</button>
     
    </div>
  );
}

export default SearchBar;