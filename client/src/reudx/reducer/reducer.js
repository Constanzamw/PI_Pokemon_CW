/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { CLEAN_DETAIL, GET_POKEMONS,SET_ORIGIN_API,SET_ORIGIN ,SET_ORIGIN_DB,GET_TYPES,POKEMON_DETAIL, CLEAR_SEARCH,FILTER_TYPES, ORDER_AZ, CLEAR_TYPES, GET_POKENAME , FILTER_ATTACK, CREATE_POKEMON, CREATE_IMAGE, GET_POKEID, ORDER_FN} from "../actions/action-types";

const initialState ={
    allPokemons: [],
    filterPokemon:[],
    pokemonDetail:{}, //{}
    types:[],
    newPokemons:[],
    img:[],  
    order:[]

}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                allPokemons: action.payload,
                filterPokemon:action.payload
                
            }
        case GET_POKENAME:
            return{
                ...state,
                filterPokemon:[action.payload],
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
                filterPokemon: state.allPokemons
                
            };  
        case ORDER_AZ:
          
            return{
                ...state,
                order:action.payload
               
            }

        case ORDER_FN:
            const sortFunctions = {
                    "A-Z": (a, b) => a.name.localeCompare(b.name),
                    "Z-A": (a, b) => b.name.localeCompare(a.name),
                };
    
                let sortedPokemons= state.filterPokemon 
                
                if (sortFunctions[state.order]) {
                    sortedPokemons = state.filterPokemon.sort(sortFunctions[state.order]) 
                    
                }

            return{
                ...state,
                filterPokemon: sortedPokemons
            }

        case FILTER_ATTACK:
            return{
                ...state,
                filterPokemon:action.payload
            }
       
        case CREATE_POKEMON:
            return{
                ...state,
                newPokemons: action.payload
            }

        case CREATE_IMAGE:
            return{
                ...state,
                img: action.payload
            }
            
        case CLEAR_SEARCH:
            return {
                ...state,
                allPokemons:[]
            };

        case SET_ORIGIN_DB:
            return {
                ...state,
                filterPokemon: action.payload,
            }
                    
        case SET_ORIGIN_API:
            return {
                ...state,
                filterPokemon: action.payload,
            }
        case SET_ORIGIN:
            return {
                ...state,
                filterPokemon: action.payload,
            }


        default:
            return{
                ...state
            }
    }
}

export default reducer;