/* eslint-disable no-unused-vars */
import { CLEAN_DETAIL, GET_POKEMONS, GET_TYPES,POKEMON_DETAIL, FILTER_TYPES, ORDER_AZ, CLEAR_TYPES, GET_POKENAME , FILTER_ATTACK} from "../actions/action-types";

const initialState ={
    allPokemons: [],
    filterPokemon:[],
    pokemonDetail:{},
    types:[]
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                allPokemons: action.payload,
                
            }
        case GET_POKENAME:
            return{
                ...state,
                allPokemons:[action.payload],
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
        
        case GET_TYPES:
            return{
                ...state,
                types:action.payload
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

            case FILTER_ATTACK:
                return{
                    ...state,
                    allPokemons:action.payload
                }
       



        default:
            return{
                ...state
            }
    }
}

export default reducer;