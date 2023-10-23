const axios = require ("axios")
const getData = require("../utils/getData");
const getPokemonDB = require("../utils/getPokemonDB")



const Url = "https://pokeapi.co/api/v2/pokemon";


const getPokemonById = async (id) =>{

  let pokemonFound = await getPokemonDB(id)

  if(!pokemonFound){ // si no esta en la db, vamos a la api
    const newpokemon = await axios
      .get(`${Url}/${id}`)
      .then((response) => response.data)
      .then((data) => getData(data))
      .catch((error) => {
        console.warn(`Error fetching data: ${error.message}`);
      });
      pokemonFound = newpokemon;
    }

if(!pokemonFound) throw new Error (`There is no pokémon with id: ${id}`)
return pokemonFound;
};
  


module.exports = getPokemonById;


/*

const getPokemonById = async (req,res) =>{

    const baseUrl ="https://pokeapi.co/api/v2/pokemon/"

    try {
        const {id} = req.params
        const getPokemonById = await axios (`${baseUrl}/${id}`)

        const data = getPokemonById.data;
        const filteredData = await getData(data)
        res.status(200).json(filteredData)

    } catch (error) {
        res.status(500).send(error.message)
        
    }

}

 module.exports = getPokemonById



*/