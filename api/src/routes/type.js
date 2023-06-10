const { Router } = require("express");
const axios = require("axios");
const { Tipo } = require("../db");

const router = Router();

router.get("/", async (req, res) => {
  const URL = "https://pokeapi.co/api/v2/type";
  try {
    const { data } = await axios.get(URL);
    for (t of data.results) {
        const existe = await Tipo.findOne({ where: { name: t.name } });
        if (existe) return res.json(await Tipo.findAll());
        await Tipo.create({ name: t.name });
      }
    return res.status(200).json(await Tipo.findAll());
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
