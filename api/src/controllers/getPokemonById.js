const axios = require ("axios")
const getData = require("../utils/getData");

const {Pokemon, Type, Image} = require ("../db")


const Url = "https://pokeapi.co/api/v2/pokemon";


const getPokemonById = async (id) =>{
  
  if (id.toString().length > 5) {
    const pokemonDb = [await Pokemon.findByPk(id, { include: [ { model: Type },{ model: Image }] })]
    console.log(pokemonDb)
    const newPokemon = pokemonDb.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.images.map((pokemon)=> pokemon.name),
        hitPoints: pokemon.hitPoints,
        attack: pokemon.attack,
        defense: pokemon.defense,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map((pokemon)=> pokemon.name)
      }
    })
    return newPokemon[0];
  }

 
      const newpokemons = await axios
      .get(`${Url}/${id}`)
      .then((response) => response.data)
      .then((data) => getData(data))
      .catch((error) => {
        console.warn(`Error fetching data: ${error.message}`);
      });


      return newpokemons;
    

};
  
module.exports = getPokemonById;