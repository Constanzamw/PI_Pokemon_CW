/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Estilos */
import './Cards.module.css';

/*Dependencias */
//import { UseLocation, Route, Routes  } from "react-router-dom"


/*Componentes */
import Card from "../card/Card"


const Cards = ({allPokemons}) => {
  console.log(allPokemons)
  return (
    <div >
    
      <div>
      {
        
        allPokemons.map((pokemon)=>{ // iamgen nombre tipos
        
          return(
            <Card 
              key={pokemon?.id}
              id={pokemon?.id}
              name={pokemon?.name}
              image={pokemon?.image} 
              types={pokemon?.types}

            />
          )
        })
      }
      </div>
      
    </div>
  );
}

export default Cards;

/*
const renderCards = () =>{
  const arr = pokemon.slice(selector *12 - 12, selector * 12);
  return arr.map(({id, name, image, types}) =>{
    return <DriverCard
    key={id},
    id={id},
    name={name},
    image={image},
    types={types}
    />
    
  })
}



*/