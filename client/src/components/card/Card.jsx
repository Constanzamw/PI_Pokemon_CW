/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* Estilos */
import './Card.module.css';

/*Dependencias */
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

/*Componentes */
//import {Home, Detail, Create} from "./components/views"


const Card = ({id,name,image,types}) => {

  const allPokemons = useSelector((state)=> state.allPokemons)

  return (
    <div >
      <h3> {id} </h3>   
      <Link to={`/detail/${id}`}>
      <img src={image} alt={name} />
      </Link>     
      <h1> {name}</h1> 
      <h2> {types} </h2> 
       
    </div>
  );
}

export default Card;