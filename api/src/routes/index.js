const { Router } = require('express');
const getPokemonsHandler = require ("../handlers/getPokemonsHandler")
const getPokemonById = require ("../handlers/getPokemonByIdHandler")
const getPokemonsByNameHandler = require("../handlers/getPokemonsByNameHandler")
const postPokemonHandler = require("../handlers/postPokemonHandler")
const getTypesHandler = require("../handlers/getTypesHandler");
const ImageHandler = require('../handlers/imageHandler');


// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", getPokemonsHandler)
router.get("/search", getPokemonsByNameHandler);
router.post("/create", postPokemonHandler)
router.get("/types", getTypesHandler)
router.get("/image", ImageHandler)
router.get("/:id", getPokemonById)




module.exports = router;
