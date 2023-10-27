/* eslint-disable no-unused-vars */
import { CLEAN_DETAIL, GET_POKEMONS, POKEMON_DETAIL, FILTER_TYPES, ORDER_AZ, CLEAR_TYPES } from "../actions/action-types";

const initialState ={
    allPokemons: [],
    filterPokemon:[],
    pokemonDetail:{}
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                allPokemons: action.payload,
                
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
        case FILTER_TYPES:
            
            return{
                ...state,
                filterPokemon: action.payload
            }
            case CLEAR_TYPES:
                return {
                    ...state,
                    filterPokemon: []
                };  
            case ORDER_AZ:
                return{
                    ...state,
                    allPokemons: action.payload

                }
       



        default:
            return{
                ...state
            }
    }
}

export default reducer;