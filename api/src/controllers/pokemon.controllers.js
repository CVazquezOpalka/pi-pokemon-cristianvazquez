const axios = require("axios");
const { Pokemon, Tipo } = require("../db.js");

const getPokemons = async (req, res) => {
  const pokesBDD = await Pokemon.findAll({ include: Tipo });
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
  try {
    const { data } = await axios.get(URL);
    //me devuelve un objeto con el nombre del pokemon, y la url de los datos
    //declaro un pokearray
    let pokeArr = [];
    //data.results es un array, al recorrerlo con map puedo tner un array de urls a resolver
    const urlArray = data.results.map(async (e) => {
      const { data } = await axios.get(e.url);
      return data;
    });
    //url array es un array de promesas, utilizando Promise.All, puedo resolverlas;
    const promesiArray = await Promise.all(urlArray);
    //promesi array tiene toda la informacion de los pokemones, por lo que puedo recorrerla con un forEach.
    promesiArray.forEach((e) => {
      pokeArr.push({
        id: e.id,
        name: e.name,
        type: e.types.map((e) => e.type.name),
        image: e.sprites.other.home.front_default,
        peso: e.weight,
        altura: e.height,
        vida: e.stats[0].base_stat,
        fuerza: e.stats[1].base_stat,
        defefensa: e.stats[2].base_stat,
        velocidad: e.stats[5].base_stat,
      });
    });
    pokeArr = [...pokesBDD, ...pokeArr];
    res.status(200).json(pokeArr);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getPokemon = async (req, res) => {
  //capturo el id desde req.params;
  const { id } = req.params;
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  try {
    //realizola peticion a la api con la url marcada concatenandole el id
    const { data } = await axios.get(URL);
    //realizo cambios en el objeto que voy a enviar al cliente
    const pokeInfo = {
      id: data.id,
      name: data.name,
      type: data.types.map((e) => e.type.name),
      image: data.sprites.other.home.front_default,
      peso: data.weight,
      altura: data.height,
      vida: data.stats[0].base_stat,
      fuerza: data.stats[1].base_stat,
      defefensa: data.stats[2].base_stat,
      velocidad: data.stats[5].base_stat,
    };
    //respondo con un 200 al cliente, y le envio el objeto creado anteriormente
    return res.status(200).json(pokeInfo);
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

  if (!name) return res.json({ message: "El nombre es obligatorio" });

  const existe = await Pokemon.findOne({ where: { name: name } });
  if (existe) return res.json({ message: "El pokemon ya existe" });

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
