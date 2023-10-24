const axios = require ("axios")
const {Type} = require("../db")

const getTypes = async () =>{

  let types = await Type.findAll();  //db
  
  if(types.length === 0){
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const apiTypes = response.data.results;

    for(let apiTypes of apiTypes){
      await Type.create({name: apiTypes.name});
    }

    types = await Type.findAll() // datos actualizados
  
  }

   return types;


 
};


module.exports = getTypes;

