const axios = require ("axios")
const {Pokemon, Type, Image} = require("../db")
const getData = require("../utils/getData");
const getPokemonDB = require("../utils/getPokemonDB")


//const Url = "https://pokeapi.co/api/v2/pokemon";

const postPokemon = async ({ name, image, hitPoints, attack,defense,speed,height,weight,types}) =>{
    
    
      const [newPokemon, created] = await Pokemon.findOrCreate({ where:{name},defaults:{
            image,
          hitPoints,
          attack,
          defense,
          speed,
          height,
          weight,
          types,
      }
               
    });
 if (!created){
    throw Error ("Name repeated")
 }

    if(!newPokemon){
        throw new Error("Error creating Pokemon")
    }
    if (types && types.length > 0) { 
        const typeModels = await Type.findAll({ 
            where: { name: types } });
        await newPokemon.setTypes(typeModels);
      }
    

      const newImage = await Image.findOne({ where: {name:image}})
      await newPokemon.addImage(newImage)

      return newPokemon;
    
      
};


module.exports= postPokemon;