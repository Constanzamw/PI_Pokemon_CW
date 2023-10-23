const getPokemons = require ("../controllers/getPokemons")

const getPokemonsHandler = async (req, res) => {
    try {
      const pokemons = await getPokemons();  
      return res.status(200).json(pokemons);    
    } catch (error) {
      return res.status(404).json({ errorMessage: error.message })  
    }  
};

module.exports = getPokemonsHandler