/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* Estilos */
//import './Nav.module.css';

/*Dependencias */
import { useState } from "react";

/*Componentes */
//import Button from "../button/Button"


const SearchBar = ({ onSearch }) => {

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };


  
  return (
    <div >
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
     
    </div>
  );
}

export default SearchBar;