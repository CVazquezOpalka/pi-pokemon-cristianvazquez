const { Router } = require("express");
const {
  getPokemon,
  getPokemons,
  createPokemons,
} = require("../controllers/pokemon.controllers");

const router = Router();

router.get("/", getPokemons);
router.get("/:id", getPokemon);
router.post("/", createPokemons);


module.exports = router;
