const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const POKE_URL = "https://pokeapi.co/api/v2/";
let collection = [];
app.use(cors());
app.use(express.json());

app.get("/api/pokemon/:name", (req, res) => {
  const name = req.params.name;
  axios
    .get(POKE_URL + `pokemon/${name}`)
    .then(({ data }) => {
      const { name, height, weight, types, sprites } = data;
      const pokemon = {
        name: name,
        height: height,
        weight: weight,
        types: types,
        sprites: {
          front: sprites["front_default"],
          back: sprites["back_default"],
        },
      };
      console.log(pokemon);
      return res.json(pokemon);
    })
    .catch((err) => {
      return res.send(err);
      console.log(err);
    });
});

app.get("/api/type/:name", (req, res) => {
  const name = req.params.name;
  axios
    .get(POKE_URL + `type/${name}`)
    .then(({ data }) => {
      console.log(data);
      return res.json(data.pokemon);
    })
    .catch((err) => {
      console.log(err);
      return res.send(err);
    });
});

app.get("/api/collection", (req, res) => {
  return res.json(collection);
});

app.post("/api/collection/catch", (req, res) => {
  const pokemon = req.body;
  collection.push(pokemon);
  console.log(collection);
  res.send(collection);
});

app.delete("/api/collection/release/:name", (req, res) => {
  pokemonName = req.params.name;
  collection = collection.filter((pokemon) => {
    return pokemon.name !== pokemonName;
  });
  res.send(collection);
});

module.exports = app;
