/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Dependencias */
import axios from "axios"
/* Componentes */
import { CLEAN_DETAIL, GET_POKEMONS, GET_POKENAME, GET_TYPES,POKEMON_DETAIL, FILTER_ATTACK, FILTER_ORIGIN, ORDER_AZ, FILTER_TYPES, CLEAR_TYPES } from "./action-types";


export const getPokemons = () => {
    return async function(dispatch){
      
        let {data} = await axios("http://localhost:3001/");
        
        return dispatch({type: GET_POKEMONS , payload: data})
    }
}

export const getPokename = (name)=>{
    return async function (dispatch){
        let {data} = await axios(`http://localhost:3001/search?name=${name}`)
        console.log(data)
        return dispatch ({ type: GET_POKENAME, payload:data})
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

export const getTypes =()=>{
    return async function (dispatch){
        let {data} = await axios("http://localhost:3001/types")

        return dispatch ({ type: GET_TYPES, payload: data})
    }
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

export const filterAttack = (minAttack, maxAttack)=>{
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/");
        const allPokemon = response.data;

        const filteredPokemon = allPokemon.filter((pokemon) => {
            const attack = pokemon.attack;
        return attack >= minAttack && attack <= maxAttack;
    });
    dispatch({ type: FILTER_ATTACK, payload: filteredPokemon });
    }
}





// export const filterOrigin =()=>{
//     return async function (dispatch){
//         const {data}= await axios
//     }
// }

/*

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

export const filterTypes = (types) => {
    return async function (dispatch) {
        const { data } = await axios("http://localhost:3001/");

        dispatch({ type: FILTER_TYPES, payload: data });
    };
}

*/