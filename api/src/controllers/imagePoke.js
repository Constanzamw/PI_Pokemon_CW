const axios = require("axios");
const {Image} = require("../db")

const getImage=async()=>{
    const info = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    const result = info.data.results;

    for(const dataImg of result){
        const pokemonInfo = await axios.get(dataImg.url)
        const imageUrl = pokemonInfo.data.sprites.front_default // url de la imagen del poke

        const response = await Image.findAll({where: {name:imageUrl} });

        if(response.length === 0){
            
            await Image.create({ name:imageUrl})//si no existe crea un registro en la db
        }
    }

    return await Image.findAll();
   

}

module.exports = getImage