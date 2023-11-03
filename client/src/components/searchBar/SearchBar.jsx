/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* Estilos */
//import './Nav.module.css';

/*Dependencias */
import { useState,useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { getPokename,  } from "../../reudx/actions/actions";
import { clearSearch } from "../../reudx/actions/actions";
import { Link } from "react-router-dom";
import Card from "../card/Card";


const SearchBar =() => {
    
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [searchType, setSearchType] = useState("name"); 
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);

  const [filteredPokemons, setFilteredPokemons] = useState([]); // para los resultados de la búsqueda


  const onSearchs = async () => {
 
      if (parseInt(inputValue)) {
        setError("Invalid name");
        return;
    }
  
      dispatch(getPokename(inputValue)); //busco por nombre y actualizo el estado global
     
      // if (response && response.length > 0) {
      //   setFilteredPokemons(response); 
      // } else {
      //   setError("Pokemon not found");
      // }
    
  
};

const handleChange = (event) => {
  setInputValue(event.target.value);
};

const HandleClearSearch = () => {
  setInputValue(''); // Borra el valor del campo de búsqueda
  setFilteredPokemons([]); // Borra los resultados de la búsqueda
  dispatch(clearSearch()); // Dispara la acción para borrar la búsqueda en el estado global si es necesario
};
  
  return (
    <div  >
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={onSearchs}>Search</button>
      <button onClick={HandleClearSearch}>Clear Search</button>
      
    </div>
  );
}

export default SearchBar;



/*

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
      const response = await dispatch(getPokename(inputValue)); //busco por nombre y actualizo el estado global
      
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

      const HandleClearSearch = () => {
        setInputValue(''); // Borra el valor del campo de búsqueda
        dispatch(clearSearch()); // Dispara la acción para borrar la búsqueda en el estado global si es necesario
      };
    
  
  return (
    <div  >
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={onSearchs}>Search</button>
      <button onClick={HandleClearSearch}>Clear Search</button>
 
    </div>
  );
}

export default SearchBar;


*/