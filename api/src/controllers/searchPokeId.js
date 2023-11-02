const axios = require ("axios")
const getData = require("../utils/getData");
const getPokemonDB = require("../utils/getPokemonDB")
const { Pokemon, Type } = require("../db")
const { Op } = require("sequelize");


const Url = "https://pokeapi.co/api/v2/pokemon";

const getPokeId = async (id)=>{

    let pokeFound = await Pokemon.findOne({
        where: { 
            id : {
              [Op.iLike]: `%${id}%`, // x lo de mayus o minusc
            },
          },
          include: [
            {
              model: Type,
              through: { attributes: [] }, 
            },
          ],
    });

    if(!pokeFound){    
        const newpokemon = await axios
          .get(`${Url}/${id}`)
          .then((response) => response.data)
          .then((data) => getData(data))
          .catch((error) => {
            console.warn(`Error fetching data: ${error.message}`);
          });
          pokeFound = newpokemon;
        }
    
    if(!pokeFound) throw new Error (`There is no pokémon with name: ${id}`)
    return pokeFound;
    };



module.exports = getPokeId