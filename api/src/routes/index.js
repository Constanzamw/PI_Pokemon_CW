const { Router } = require('express');
const getPokemonsHandler = require ("../handlers/getPokemonsHandler")
const getPokemonById = require ("../handlers/getPokemonByIdHandler")
const getPokemonsByNameHandler = require("../handlers/getPokemonsByNameHandler")
const postPokemonHandler = require("../handlers/postPokemonHandler")
const getTypesHandler = require("../handlers/getTypesHandler");
const ImageHandler = require('../handlers/imageHandler');
const createUserHandler = require('../handlers/userHandlers/createUserHandler');
const loginHandler = require ("../handlers/userHandlers/loginHandler")



const router = Router();

//Users
router.post("/createUser", createUserHandler)
router.post("/login", loginHandler)

//Pokemons
router.get("/", getPokemonsHandler)
router.get("/search", getPokemonsByNameHandler);
router.post("/create", postPokemonHandler)
router.get("/types", getTypesHandler)
router.get("/image", ImageHandler)
router.get("/:id", getPokemonById)




module.exports = router;
