/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import style from "./Paginado.module.css"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card"
import { getPokemons, orderFn } from "../../reudx/actions/actions";
import { useState } from "react";
import { useEffect } from "react";
import { all } from "axios";

const pokesPerPage=12

const Paginate=()=>{
    let allPokemons = useSelector((state)=>state.filterPokemon)
    let order = useSelector((state)=> state.order)

    const totalPages = Math.ceil(allPokemons.length / pokesPerPage)
    const [current, SetCurrent] = useState(0)
    const dispatch = useDispatch()

    
    useEffect(()=>{
       dispatch(getPokemons())
    },[dispatch])

    const startPokes = current  * pokesPerPage;
    const endPokes = startPokes + pokesPerPage;
    const pokesToDisplay = allPokemons.slice(startPokes, endPokes);

 
    useEffect(()=>{
      SetCurrent(0)
   },[dispatch, allPokemons])

    const nextHandler = ()=>{
        if(current < totalPages -1){
            SetCurrent(current+1)
        }
    };

    const previousHandler = ()=>{
        if(current > 0){
            SetCurrent(current-1)
        }
    }
  
   

    return(
        <div >
       
    <div className={style.cardContainer} >
      {
        pokesToDisplay.map((pokemon)=>{ // iamgen nombre tipos
       
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
      
        <button className={style.paginationButtons} onClick={previousHandler} > Previous page </button>
            <span> Page {current +1} from {totalPages}</span>
        <button className={style.paginationButtons} onClick={nextHandler}> Next page</button>
        </div>
    
    </div>
    )
}

export default Paginate;