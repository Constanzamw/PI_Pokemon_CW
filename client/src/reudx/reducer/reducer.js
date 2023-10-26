/* eslint-disable no-unused-vars */
import { CLEAN_DETAIL, GET_POKEMONS, POKEMON_DETAIL } from "../actions/action-types";

const initialState ={
    allPokemons: [],
    filterPokemon:[], // mi aux
    pokemonDetail:{}
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                allPokemons: action.payload,
                filterPokemon: action.payload
            }
        case POKEMON_DETAIL:
            return{
                ...state,
                pokemonDetail: action.payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                pokemonDetail:{}
            }



        default:
            return{
                ...state
            }
    }
}

export default reducer;