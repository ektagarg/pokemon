var express = require('express');
var router = express.Router();
const pokemonController = require('../controller/pokemon.controller');
router.get('/pokemons',pokemonController.getPokemon);
router.post('/pokemon',pokemonController.createPokemon);
router.put('/pokemon/:id',pokemonController.updatePokemon);
router.delete('/pokemon/:id',pokemonController.deletePokemon);

module.exports = router;