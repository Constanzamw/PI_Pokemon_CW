const axios = require ("axios")
const {Pokemon, Type} = require("../db")
const getData = require("../utils/getData");
const getPokemonDB = require("../utils/getPokemonDB")


//const Url = "https://pokeapi.co/api/v2/pokemon";

const postPokemon = async ({ name, image, hitPoints, attack,defense,speed,height,weight,types}) =>{
    //let pokemonFound = await getPokemonDB(id);
    
      const newPokemon = await Pokemon.create({
       
        name,
        image,
        hitPoints,
        attack,
        defense,
        speed,
        height,
        weight,
        types,
        
    });

    if(!newPokemon){
        throw new Error("Error creating Pokemon")
    }
    if (types && types.length > 0) { // valido si tiene types
        const typeModels = await Type.findAll({ 
            where: { name: types } });
        await newPokemon.setTypes(typeModels);
      }
      
      return newPokemon;
    
};


module.exports= postPokemon;