/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Estilos */
import './Cards.module.css';

/*Dependencias */
//import { UseLocation, Route, Routes  } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useState } from 'react';

/*Componentes */
import Card from "../card/Card"
import { useEffect } from 'react';


const Cards = () => {

  const allPokemons = useSelector((state)=> state.allPokemons)
  const [currentPage, setCurrentPage] = useState(0); // pagina

  let nextPage = () => {
    if (allPokemons.length <= currentPage + 12) {
       setCurrentPage(currentPage);
    } else setCurrentPage(currentPage + 12);
 };
 let prevPage = () => {
    if (currentPage < 12) {
       setCurrentPage(0);
    } else {
       setCurrentPage(currentPage - 12);
    }
 };
 
const firstPage = () => {
  setCurrentPage(0);
};

const lastPage = () => {
  setCurrentPage(allPokemons.length - 12);
};

useEffect(() => {
  firstPage()
}, [allPokemons]);

const filteredPokemons = allPokemons.slice(currentPage, currentPage + 12);
  return (
    <div >
      <div>
        <button onClick={firstPage}> ⏮ </button>
        <button onClick={prevPage}>  ◀  </button>
        <button onClick={() => handlePageClick(Math.ceil(currentPage/12+1))}>
        {Math.ceil(currentPage/12+1)}
        </button>
        <button onClick={nextPage}>  ▶  </button>
        <button onClick={lastPage}>  ⏭ </button>
      </div>
      <div>
      {
        filteredPokemons.map((pokemon)=>{ // iamgen nombre tipos
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
      <div >
            <button onClick={firstPage}> ⏮ </button>
            <button onClick={prevPage}>  ◀  </button>
            <button onClick={() => handlePageClick(Math.ceil(currentPage/12+1))}>
              {Math.ceil(currentPage/12+1)}
            </button>
            <button onClick={nextPage}>  ▶  </button>
            <button onClick={lastPage}>  ⏭ </button>
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