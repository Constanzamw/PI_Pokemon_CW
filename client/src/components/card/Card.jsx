/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* Estilos */
import style from "./Card.module.css"

/*Dependencias */
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"


const Card = ({id,name,image,types}) => {

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

/*

  <div className={style.container} >
      
      <h3 className={style.id}> {id} </h3>  
      <div className={style.imageContainer}>
        <Link to={`/detail/${id}`}>
         <img className={style.image} src={image} alt={name} />
        </Link>  
      </div>   
      
      <h1 className={style.name}> {name}</h1> 
      <h2 className={style.types}> {types} </h2> 
      
     </div>


const backgroundColorClass = types[0].toLowerCase();


<h3 className={style.id}> {id} </h3>


*/