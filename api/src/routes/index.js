const { Router } = require('express');
const getPokemonsHandler = require ("../handlers/getPokemonsHandler")
const getPokemonById = require ("../handlers/getPokemonByIdHandler")
const getPokemonsByNameHandler = require("../handlers/getPokemonsByNameHandler")
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/", getPokemonsHandler)
router.get("/search", getPokemonsByNameHandler);
router.get("/:id", getPokemonById)


module.exports = router;
