const axios = require ("axios")
const getData = require("../utils/getData");
const getPokemonDB = require("../utils/getPokemonDB")
const {Pokemon, type} = require ("../db")


const Url = "https://pokeapi.co/api/v2/pokemon";


const getPokemonById = async (id) =>{

  
  if (isNaN(id)){
    let foundPokemon = await getPokemonDB(id)
    return foundPokemon
  }
  
    const newpokemon = await axios
      .get(`${Url}/${id}`)
      .then((response) => response.data)
      .then((data) => getData(data))
      .catch((error) => {
        console.warn(`Error fetching data: ${error.message}`);
      });
      return newpokemon;
    

//if(!foundPokemon) throw new Error (`There is no pokémon with id: ${id}`)
//return foundPokemon;
};
  
module.exports = getPokemonById;