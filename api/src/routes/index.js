const { Router } = require('express');
const getPokemonsHandler = require ("../handlers/getPokemonsHandler")
const getPokemonById = require ("../handlers/getPokemonByIdHandler")
const getPokemonsByNameHandler = require("../handlers/getPokemonsByNameHandler")
const postPokemonHandler = require("../handlers/postPokemonHandler")
const getTypesHandler = require("../handlers/getTypesHandler")

// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", getPokemonsHandler)
router.get("/search", getPokemonsByNameHandler);
router.post("/", postPokemonHandler)
router.get("/types", getTypesHandler)
router.get("/:id", getPokemonById)


module.exports = router;
