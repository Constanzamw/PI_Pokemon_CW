/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Estilos */
//import './Nav.module.css';

/*Dependencias */
import { useLocation } from "react-router-dom";
import {  useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/*Componentes */
import Select from "../../Utils/Select";
import Card from "../card/Card";
import { filterTypes } from "../../reudx/actions/actions";
import { clearTypes } from "../../reudx/actions/actions";
import { getTypes } from "../../reudx/actions/actions";
import { filterAttack } from "../../reudx/actions/actions";
import { orderAz } from "../../reudx/actions/actions";




const Nav = () => {

  //filtrado por type
  const types = useSelector((state)=> state.types)
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [selectedType, setSelectedType] = useState('all');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  

  const handleFilterTypes =(event)=>{
    const selectedType = event.target.value
    dispatch(filterTypes(selectedType));
    const filteredPokemon = filterTypes(selectedType);
    setSelectedType(selectedType);
    setFilteredPokemon(filteredPokemon);
  };

  const handleClearFilterTypes = () => {
    dispatch(clearTypes());
    // setPaginado(true); // Otra lógica que necesites restablecer
    // setOrder(false);
    // setFilter(false);
  };


 // const location = useLocation();
  const filterPoke = useSelector((state)=> state.filterPokemon)

  // const [paginado,setPaginado]=useState(false)
  // const [order, setOrder] = useState(false)
  // const [filter, setFilter] = useState(false)
 
 
  //   const types = [
  //     "normal",
  //     "fighting",
  //     "flying",
  //     "poison",
  //     "ground",
  //     "rock",
  //     "bug",
  //     "ghost",
  //     "steel",
  //     "fire",
  //     "water",
  //     "grass",
  //     "electric",
  //     "psychic",
  //     "ice",
  //     "dragon",
  //     "dark",
  //     "fairy",
  //     "unknown",
  //     "shadow"
  // ]


   // filtrado x orden alfabetico

   const [sortType, setSortType] = useState("default")

    const handleSortPokemons = (event) => {
      const selectedSortType = event.target.value;
      setSortType(selectedSortType);
      dispatch(orderAz(selectedSortType)); // Envia el tipo de orden al action
    };


 
    // filtrado por attack
    const [sortAttack, setSortAttack] = useState("default")
    
    useEffect(() => {
      dispatch(filterAttack());
    }, [dispatch]);

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




  return (
    <div >
      <h1> NavBar </h1>
      <div className="select">
        <label>Filter by type: </label> 
        <select value={selectedType} onChange={handleFilterTypes}>
          <option value="all">All</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
          <button onClick={handleClearFilterTypes}> Clear Types </button>
      </div>
      <div>
        <label>Sort by:</label>
          <Select
            name="Sort by"
            values={["default", "A-Z", "Z-A"]}
            onChange={handleSortPokemons}
          />
      </div>
      <div>
      <label >Order by attack</label>
      <select
        name="selectOrderAttack" 
        onChange={handlerOrderAttack}>  
        <option> - </option>
        <option value='1'>Strong</option>
        <option value='100'>Weak</option>
      </select>
      </div>
    
    </div>
  );
}

export default Nav;


/*

const Nav = () => {

  const filterPoke = useSelector((state)=> state.filterPokemon)
  const typess = useSelector((state)=> state.types)

  const location = useLocation();
  const dispatch = useDispatch();

  const [paginado,setPaginado]=useState(false)
  const [order, setOrder] = useState(false)
  const [filter, setFilter] = useState(false)
  const [sortType, setSortType] = useState("default")
 
  //   const types = [
  //     "normal",
  //     "fighting",
  //     "flying",
  //     "poison",
  //     "ground",
  //     "rock",
  //     "bug",
  //     "ghost",
  //     "steel",
  //     "fire",
  //     "water",
  //     "grass",
  //     "electric",
  //     "psychic",
  //     "ice",
  //     "dragon",
  //     "dark",
  //     "fairy",
  //     "unknown",
  //     "shadow"
  // ]
  
    const handleFilterTypes =(event)=>{
      const selectedType = event.target.value
       dispatch(filterTypes(selectedType))
       setPaginado(false),
       setOrder(false),
       setFilter(true)
    }

    const handleSortPokemons = (event) => {
      const selectedSortType = event.target.value;
      setSortType(selectedSortType);
      dispatch(orderAz(selectedSortType)); // Envia el tipo de orden al action
    };


    const handleClearFilterTypes = () => {
      dispatch(clearTypes());
      setPaginado(true); // Otra lógica que necesites restablecer
      setOrder(false);
      setFilter(false);
    };

  return (
    <div >
      <h1> NavBar </h1>
      <div className="select">
        <p>Filter by type: </p> 
          <Select 
            name="Filter by type"
            values={["all", ...types]} 
            onChange={handleFilterTypes} 
          />
          <button onClick={handleClearFilterTypes}> Clear Types </button>
         
            <p>Sort by:</p>
              <Select
                name="Sort by"
                values={["default", "A-Z", "Z-A"]}
                onChange={handleSortPokemons}
              />

          </div>
    
    </div>
  );
}

export default Nav;


-----------
const Nav = () => {

  //filtrado por type
  const types = useSelector((state)=> state.types)
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [selectedType, setSelectedType] = useState('all');
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const handleFilterTypes =(event)=>{
    const selectedType = event.target.value
    dispatch(filterTypes(selectedType));
    const filteredPokemon = filterTypes(selectedType);
    setSelectedType(selectedType);
    setFilteredPokemon(filteredPokemon);
  };

  const handleClearFilterTypes = () => {
    dispatch(clearTypes());
    // setPaginado(true); // Otra lógica que necesites restablecer
    // setOrder(false);
    // setFilter(false);
  };


 // const location = useLocation();
  const filterPoke = useSelector((state)=> state.filterPokemon)

  // const [paginado,setPaginado]=useState(false)
  // const [order, setOrder] = useState(false)
  // const [filter, setFilter] = useState(false)
 
 
  //   const types = [
  //     "normal",
  //     "fighting",
  //     "flying",
  //     "poison",
  //     "ground",
  //     "rock",
  //     "bug",
  //     "ghost",
  //     "steel",
  //     "fire",
  //     "water",
  //     "grass",
  //     "electric",
  //     "psychic",
  //     "ice",
  //     "dragon",
  //     "dark",
  //     "fairy",
  //     "unknown",
  //     "shadow"
  // ]


   // filtrado x orden alfabetico

   const [sortType, setSortType] = useState("default")

    const handleSortPokemons = (event) => {
      const selectedSortType = event.target.value;
      setSortType(selectedSortType);
      dispatch(orderAz(selectedSortType)); // Envia el tipo de orden al action
    };


 
    // filtrado por attack
    const [sortAttack, setSortAttack] = useState("default")
    
    useEffect(() => {
      dispatch(filterAttack());
    }, [dispatch]);

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




  return (
    <div >
      <h1> NavBar </h1>
      <div className="select">
        <label>Filter by type: </label> 
        <select value={selectedType} onChange={handleFilterTypes}>
          <option value="all">All</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
          <button onClick={handleClearFilterTypes}> Clear Types </button>
      </div>
      <div>
        <label>Sort by:</label>
          <Select
            name="Sort by"
            values={["default", "A-Z", "Z-A"]}
            onChange={handleSortPokemons}
          />
      </div>
      <div>
      <label >Order by attack</label>
      <select
        name="selectOrderAttack" 
        onChange={handlerOrderAttack}>  
        <option> - </option>
        <option value='1'>Strong</option>
        <option value='100'>Weak</option>
      </select>
      </div>
    
    </div>
  );
}

export default Nav;



*/