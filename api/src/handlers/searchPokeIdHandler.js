const getPokeId = require ("../controllers/searchPokeId")

const getPokeIdHandler = async (req,res)=>{
    try {
        const {id} = req.query
        const pokemon = await getPokeId(id)
        return res.status(200).json(pokemon)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports = getPokeIdHandler