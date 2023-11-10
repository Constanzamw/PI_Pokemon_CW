/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* Estilos */
import style from "./Card.module.css"

/*Dependencias */
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { Link } from "react-router-dom"
//import { addFav, deleteFav } from "../../reudx/actions/actions";


const Card = ({id,name,image,types}) => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state)=> state.allPokemons)
  

  const typeArray = ()=>{
    let pokeTypes=[]
    for (let type of types){
      pokeTypes.push(type.name)
    }
     
  return pokeTypes.join(', ')
        }
    
  const formattedTypes = typeof( types[0])=="string" ? types.join(', ') : typeArray()
  const backgroundColorClass = types[0]
  

  return (
    <div className={`${style.container} ${style[backgroundColorClass]}`}>
      <div className={style.topRight}>
      </div>
    
      <h1 className={style.name}> {name}</h1>
    <div className={style.imageContainer}>
      <Link to={`/detail/${id}`}>
        <img className={style.image} src={image} alt={name} />
      </Link>
    </div>
    <div className={style.bottom}>
      
      <h2 className={style.types}> {formattedTypes} </h2>
    </div>
  </div>
  
  );
}

export default Card;
