const axios = require ("axios")
const {Type} = require("../db")

const getTypes = async () =>{

  
  let types = []

  if(types.length === 0){
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const apiTypes = response.data.results;

    for(let type of apiTypes){
      const newType = await Type.findOrCreate({where: {name: type.name}});
     
    }

    types = await Type.findAll() 
  }

   return types;

};


module.exports = getTypes;

