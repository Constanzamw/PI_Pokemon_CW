const { Pokemon, User } = require ("../../db")

const deleteFavorite = async (id,userId) =>{
    const user = await User.findByPk(userId);
    let fav = await Pokemon.findByPk(id);

    await user.removePokemon(fav)
    const favorites = await User.getPokemons();

    if(!favorites) throw new Error("Pokemon cannot be deleted")
    return favorites;


}

module.exports = deleteFavorite;