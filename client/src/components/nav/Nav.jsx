/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Estilos */
import style from'./Nav.module.css';

/*Dependencias */

import {  useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

/*Componentes */
import Select from "../../Utils/Select";
import { filterTypes, orderFn } from "../../reudx/actions/actions";
import { clearTypes } from "../../reudx/actions/actions";
import { getTypes } from "../../reudx/actions/actions";
import { filterAttack } from "../../reudx/actions/actions";
import { filterOrigin } from "../../reudx/actions/actions";
import { orderAz } from "../../reudx/actions/actions";
import { logOut } from '../../reudx/actions/actions';
import Logo from "../../assets/Logo.png"
import SearchBar from '../searchBar/SearchBar';


const Nav = () => {

  //filtrado por type
  const types = useSelector((state)=> state.types)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  
  const filterPoke = useSelector((state)=> state.filterPokemon)
  const [selectedType, setSelectedType] = useState('all');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  
  const handleFilterTypes =(event)=>{
    const selectedType = event.target.value
    dispatch(filterTypes(event.target.value));
    setSelectedType(selectedType);
  
  };

  const handleClearFilterTypes = () => {
    dispatch(clearTypes());
    setSelectedType('all');
   };

   
   // filtrado x orden alfabetico

   const [sortType, setSortType] = useState("default")

   const handleSortPokemons = (event) => {
    
      dispatch(orderAz(event.target.value));
      dispatch(orderFn())
      setSortType(event.target.value); 
    };
    
 
    // filtrado por attack
    const [sortAttack, setSortAttack] = useState("default")
 
    const handlerOrderAttack = (event)=>{
      const selectedSortAttack = event.target.value;
      if (selectedSortAttack === '1') {
         dispatch(filterAttack(50, 100)); // los fuertes
      } else if (selectedSortAttack === '100') {
         dispatch(filterAttack(0, 49)); //los debiles
      } else {
        dispatch(filterAttack(0, 200));
      }
      setSortAttack(selectedSortAttack);
    }

  // filtrado por origin
  const [selectedOrigin, setSelectedOrigin] = useState('All');
 const originPoke = useSelector((state) => state.allPokemons);
 
  const handleOriginFilterChange = (event) => {
   
    setSelectedOrigin(event.target.value);
    dispatch(filterOrigin(event.target.value));
  };

  const user = useSelector((state)=> state.user)
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };


  return (
    <div className={style.navbar}>
      <img src={Logo} alt="Logo" className={style.logo} />
      <SearchBar />
    
      <div className={style.select}>
        <label>Filter by type: </label> 
        <select value={selectedType} onChange={handleFilterTypes}>
          <option value="all">All</option>
          {types.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
          <button onClick={handleClearFilterTypes}> Clear Types </button>
      </div>
      <div className={style.select}>
        <label>Sort by:</label>
          <Select
            name="Sort by"
            values={["default", "A-Z", "Z-A"]}
            onChange={handleSortPokemons}
          />
      </div>
      <div className={style.select}>
      <label >Order by attack</label>
      <select
        name="selectOrderAttack" 
        onChange={handlerOrderAttack}>  
        <option> - </option>
        <option value='1'>Strong</option>
        <option value='100'>Weak</option>
      </select>
      </div>
      <div>
      <label className={style.select}>Origin:</label>
      <select value={selectedOrigin} onChange={handleOriginFilterChange}>
        <option value="All">All</option>
        <option value="Api">API</option>
        <option value="Database">Database</option>    
      </select>
        </div>
      <div className={style.navbarButton}>
        <button> 
          <Link to="/create" > Create! </Link>
        </button>
      </div>
      <div>
      {user ? (
        <button onClick={handleLogOut}>Log Out</button>
      ) : null}   

      </div>
    
    </div>
  );
}

export default Nav;

