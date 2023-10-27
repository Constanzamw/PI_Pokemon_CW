/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Dependencias */
import axios from "axios"
/* Componentes */
import { CLEAN_DETAIL, GET_POKEMONS, POKEMON_DETAIL, FILTER_ATTACK, ORDER_AZ, FILTER_TYPES, CLEAR_TYPES } from "./action-types";


export const getPokemons = () => {
    return async function(dispatch){
      
        let {data} = await axios("http://localhost:3001/");
        
        return dispatch({type: GET_POKEMONS , payload: data})
    }

}

export const pokemonDetail = (id) =>{
    return async function (dispatch){
        let {data} = await axios(`http://localhost:3001/${id}`)

        return dispatch({ type: POKEMON_DETAIL, payload: data})
    }
}

export const cleanDetail = ()=>{
    return {type: CLEAN_DETAIL}
}

export const filterTypes = (types) =>{
    return async function (dispatch){
      const {data} = await axios("http://localhost:3001/")
      
        if(types === "all"){
            return dispatch ({ type: FILTER_TYPES, payload: data})
        }
        const pokeFiltered = data.filter(pokemon=> pokemon.types.includes(types))
        
         return dispatch ({ type: FILTER_TYPES, payload: pokeFiltered})
    }
}

export const clearTypes = () => {
    return {type:CLEAR_TYPES}
};

export const orderAz = (sortType)=>{ 
    return async function(dispatch){
        const { data } = await axios("http://localhost:3001/")  
        let sortedPokemons = [...data];

        const sortFunctions = {
            "A-Z": (a, b) => a.name.localeCompare(b.name),
            "Z-A": (a, b) => b.name.localeCompare(a.name),
          };

          if (sortFunctions[sortType]) {
            sortedPokemons.sort(sortFunctions[sortType]);
          }
    
          return dispatch({ type: ORDER_AZ, payload: sortedPokemons})
}
}