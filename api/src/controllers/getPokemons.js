const axios = require ("axios")
const getData = require ("../utils/getData")
const {Pokemon, Type} = require ("../db")
const getDB = require ("../utils/getDb")

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async () => { // req res 

      
        let allPokemons = [];
        let endpoint = baseUrl;
    
        while (allPokemons.length < 60) { // 60 por pedido a api
          const response = await axios.get(endpoint);
          allPokemons.push(...response.data.results);
          endpoint = response.data.next;
        }
    
        const pokemonPromises = allPokemons
          .slice(0, 60)
          .map((poke) => axios.get(poke.url));
        const pokemonResponses = await Promise.all(pokemonPromises);
        const pokemons = await Promise.all(
          pokemonResponses.map((response) => getData(response.data))
        );
    
        const dbPokemons = await Pokemon.findAll({ include: Type})
        const dbPokemonsFiltered = getDB(dbPokemons)
        const allPokes = [...dbPokemonsFiltered, ...pokemons]
        return allPokes;
     
    };

    
    module.exports = getPokemons;





    // let baseUrl = "https://pokeapi.co/api/v2/pokemon/"
    // let allPokemons =[]; // me guardo todos los pokemones que trae la api
    // // let pokemonCount = 0;
    // // let pokemons = []

    // while (allPokemons.length <60 ) {
    //     const response = await axios.get(baseUrl);
    //     const results = response.data.results;
    //     allPokemons.push(...results);
           
    //     baseUrl = response.data.next;
    //   }
    
    //   const pokemonDetailPromises = allPokemons.slice(0, 60).map((pokemon) => axios.get(pokemon.url));  // hago una promesa para obtener detalle de los poke
    
    //   const pokemonResp = await Promise.all(pokemonDetailPromises);

    //     pokemons = await Promise.all(
    //         pokemonResp.map((response) => getData(response.data))
    //         ); // itero en cada pokemonResp y traigo la data
    
    //   if(!pokemons)throw new Error(`Error fetching pokemon details: ${error.message}`);
    //   return pokemons;
    // };
    
    
    
  

    