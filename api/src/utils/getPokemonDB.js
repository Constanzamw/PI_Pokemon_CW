const { Pokemon, Type } = require("../db")

const getPokemonDB = async (id) =>{

let pokemonFound = await Pokemon.findOne({
    where: { id },
    include: [ // metodo seq para asociar otro model!! 
      {
        model: Type,
        through: { attributes: [] }, 
      },
    ],
  });
  return pokemonFound;
}

module.exports = getPokemonDB;