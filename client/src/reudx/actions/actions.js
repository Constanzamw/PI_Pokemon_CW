/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Dependencias */
import axios from "axios"
/* Componentes */
import { CLEAN_DETAIL, GET_POKEMONS, POKEMON_DETAIL } from "./action-types";


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

