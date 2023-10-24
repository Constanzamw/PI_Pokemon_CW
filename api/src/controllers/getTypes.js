const axios = require ("axios")
const {Type} = require("../db")

const getTypes = async () =>{
   
    const response = await axios("https://pokeapi.co/api/v2/type");

    const allTypes =  response.data.results.map(type => ({
     id: parseInt(type.url.split("/").at(-2)),
     name:type.name   
    }));

      await Type.bulkCreate(allTypes);
     // console.log(allTypes)  
      return allTypes;
    

};


module.exports = getTypes;

