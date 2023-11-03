/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Dependencias */
import axios from "axios"
/* Componentes */
import { CLEAN_DETAIL, GET_POKEMONS, GET_POKENAME, GET_TYPES,POKEMON_DETAIL, CREATE_POKEMON, CREATE_IMAGE, FILTER_ATTACK, SET_ORIGIN_DB,SET_ORIGIN_API,SET_ORIGIN , ORDER_AZ, FILTER_TYPES, CLEAR_TYPES, CLEAR_SEARCH, ORDER_FN } from "./action-types";


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

export const filterTypes = (selectedType) =>{
    return async (dispatch)=>{
        try {
            const {data} = await axios("http://localhost:3001/")
          
              if(selectedType === "all"){
                
                  return dispatch ({ type: FILTER_TYPES, payload: data})
              } else{

                  const pokeFiltered =  data.filter((pokemon)=> pokemon.types.includes(selectedType))
                  
                   const holas= dispatch ({ type: FILTER_TYPES, payload: pokeFiltered})
                   return holas
              }
              //console.log("chau")
            
        } catch (error) {
            console.log(error)
             //alert(error.message)

          }
            
        }
}

export const clearTypes = () => {
    return {type:CLEAR_TYPES}
};

export const orderAz = (sortType)=>{ 
     return ({ type: ORDER_AZ, payload: sortType})
    
}

export const orderFn =()=>{
    return ({type: ORDER_FN})
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

//BE: router.post("/create", postPokemonHandler)
export const createPokemon = (formData) => {
    console.log(formData)
    return async function (dispatch) {
      const { data } = await axios.post("http://localhost:3001/create", formData);
      
      return dispatch({ type: CREATE_POKEMON, payload: data });
    };
  }

export const createImage = ()=>{
    return async function(dispatch){
        const {data} = await axios.get("http://localhost:3001/image")

        return dispatch({ type: CREATE_IMAGE, payload:data})
    }
}

  export const clearSearch = () => {
    return {type:CLEAR_SEARCH}
};

export const filterOrigin = (origin) => {
    
    return async function (dispatch) {
      try {
        const response = await axios("http://localhost:3001/")
        const allOrigin = response.data

    
        let originType = [];
        for(let item of allOrigin){
            originType.push(item)
        }
        //console.log(originType)
        if(origin==="Database"){
            const filteredPokemons = originType.filter(origin => isNaN(origin.id));
            return dispatch({ type: SET_ORIGIN_DB, payload: filteredPokemons })
        }
        if(origin === "Api"){
            const filteredPokemons = originType.filter(origin => !isNaN(origin.id));
            return dispatch({ type: SET_ORIGIN_API, payload: filteredPokemons })
        }

       return dispatch({ type: SET_ORIGIN, payload: originType })

      } catch (error) {
        console.error('Filter failed', error);
      }
    };
  };

/*

*/