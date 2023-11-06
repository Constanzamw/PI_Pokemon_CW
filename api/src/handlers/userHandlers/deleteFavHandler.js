const deleteFavorite = require ("../../controllers/userControllers/deleteFav")

const deleteFavHandler = async (req,res)=>{
    try {
        let {id, userId} = req.body;
        const favorites = await deleteFavorite(id, userId);
        return res.status(200).json(favorites);

    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

module.exports= deleteFavHandler;