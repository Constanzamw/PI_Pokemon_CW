/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Estilos */
//import './Nav.module.css';

/*Dependencias */
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
/*Componentes */
import Select from "../../Utils/Select";
import Card from "../card/Card";
import { filterTypes } from "../../reudx/actions/actions";
import { clearTypes } from "../../reudx/actions/actions";
import { orderAz } from "../../reudx/actions/actions";




const Nav = () => {

  const filterPoke = useSelector((state)=> state.filterPokemon)
  const typess = useSelector((state)=> state.types)

  const location = useLocation();
  const dispatch = useDispatch();

  const [paginado,setPaginado]=useState(false)
  const [order, setOrder] = useState(false)
  const [filter, setFilter] = useState(false)
  const [sortType, setSortType] = useState("default")
 
    const types = [
      "normal",
      "fighting",
      "flying",
      "poison",
      "ground",
      "rock",
      "bug",
      "ghost",
      "steel",
      "fire",
      "water",
      "grass",
      "electric",
      "psychic",
      "ice",
      "dragon",
      "dark",
      "fairy",
      "unknown",
      "shadow"
  ]

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