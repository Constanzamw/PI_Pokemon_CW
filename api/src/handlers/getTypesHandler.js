const getTypes = require ("../controllers/getTypes")

const getTypesHandler = async (req,res)=>{
    try {
        const types = await getTypes();
        return res.status(200).json(types);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }

}


module.exports= getTypesHandler;


