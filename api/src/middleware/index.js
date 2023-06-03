const axios = require("axios");
const { Pokemon, Tipo } = require("../db.js");

const info = async (name, id) => {
  const pokesBDD = await Pokemon.findAll({include: Tipo});
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
  const { data } = await axios.get(URL);

  let pokeArr = [];

  const urlArray = data.results.map(async (e) => {
    const { data } = await axios.get(e.url);
    return data;
  });

  const promesiArray = await Promise.all(urlArray);

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
  if (name) {
    const findPoke = pokeArr.find((e) => e.name == name);
    return findPoke
  }
  if (id) {
    const findPoke = pokeArr.find((e) => e.id == id);
    return findPoke;
  }
  return pokeArr;
};

module.exports = {
  info,
};
