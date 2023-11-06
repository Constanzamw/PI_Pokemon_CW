const { Favorite } = require ("../../db")



const addFavorite = async ({id, name, types, attack, defense,speed,height, weight}) =>{

    await Favorite.findOrCreate({where:await Favorite.findOrCreate({where:{id, name, types, attack, defense,speed,height, weight}})})

    const allFavorites = await Favorite.findAll() 

    return allFavorites
       
    // const user = await User.findByPk(userId);
    // if (!user) {
    //     return "User not found";
    //   }

    // let fav = await Pokemon.findByPk(id);
    // if (!fav) {
    //     return "Pokemon not found";
    //   }

    // await user.addPokemon(fav)
    // const favorites = await User.getPokemons();
    
    // return favorites;

}

module.exports = addFavorite;