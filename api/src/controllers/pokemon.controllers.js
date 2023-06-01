const axios = require("axios");
const { Pokemon, Tipo } = require("../db.js");

const getPokemons = async (req, res) => {
  const limit = 150;
  const offset = 0;
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  try {
    const { data } = await axios.get(URL);
    const pokeArr = data.results.map(async (e) => {
      const { data } = await axios.get(e.url);
      return data;
    });
    const result = await Promise.all(pokeArr);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPokemon = async (req, res) => {
  const { id } = req.params;
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const { data } = await axios.get(URL);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createPokemons = async (req, res) => {
  let { name, image, vida, fuerza, defensa, velocidad, altura, peso, tipos } =
    req.body;
  if (
    isNaN(vida) ||
    isNaN(fuerza) ||
    isNaN(defensa) ||
    isNaN(velocidad) ||
    isNaN(altura) ||
    isNaN(peso)
  )
    return res.json({ info: "Alguno de los argumentos no es un numero" });

  if (!name) return res.json({ info: "El nombre es obligatorio" });

  const existe = await Pokemon.findOne({ where: { name: name } });
  if (existe) return res.json({ info: "El pokemon ya existe" });

  const pokemon = await Pokemon.create({
    name: name.toLowerCase(),
    image: image.toLowerCase(),
    vida: Number(vida),
    fuerza: Number(fuerza),
    defensa: Number(defensa),
    velocidad: Number(velocidad),
    altura: Number(altura),
    peso: Number(peso),
  });

  if (!tipos.length) tipos = [1];

  await pokemon.setTipos(tipos);
  res.json({ info: "Pokemon creado" });
};

module.exports = {
  getPokemon,
  getPokemons,
  createPokemons,
};
