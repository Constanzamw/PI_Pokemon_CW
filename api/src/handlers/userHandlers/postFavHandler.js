const addFavorite = require ("../../controllers/userControllers/postFav")

const postFavHandler = async (req,res)=>{
try {
    const {id, name, types, attack, defense,speed,height, weight} = req.body

    const allFavorites = await addFavorite({id, name, types, attack, defense,speed,height, weight})
    return res.status(200).json(allFavorites);

} catch (error) {
    return res.status(404).json({error: error.message})
}



    // try {
    //     let {id, userId} = req.body;
    //     const favorites = await addFavorite(id, userId);
    //     return res.status(200).json(favorites);

    // } catch (error) {
    //     return res.status(404).json({error: error.message})
    // }
}

module.exports= postFavHandler;