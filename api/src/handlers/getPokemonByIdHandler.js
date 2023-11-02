const getPokemonById = require ("../controllers/getPokemonById")

const getPokemonByIdHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const pokemon = await getPokemonById(id);
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};

module.exports = getPokemonByIdHandler