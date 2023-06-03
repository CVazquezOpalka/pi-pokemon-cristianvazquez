const { Router } = require("express");
const {
  getPokemonById,
  getPokemons,
  createPokemons,

} = require("../controllers/pokemon.controllers");

const router = Router();

router.get("/", getPokemons);
router.get("/:id", getPokemonById);

router.post("/", createPokemons);

module.exports = router;
