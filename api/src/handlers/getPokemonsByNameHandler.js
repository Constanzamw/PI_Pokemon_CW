const getPokemonsByName = require ("../controllers/getPokemonsByName")

const getPokemonsByNameHandler = async (req,res)=>{
    try {
        const {name} = req.query
        const pokemon = await getPokemonsByName(name)
        return res.status(200).json(pokemon)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = getPokemonsByNameHandler