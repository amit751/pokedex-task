const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const POKE_URL = "https://pokeapi.co/api/v2/";
let collection = [];
app.use(cors());
app.use(express.json());
app.use(express.static("../client/build"));
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
      return res.json(pokemon);
    })
    .catch((err) => {
      if (err.response.status === 404) {
        return res.status(404).json({ name: name, message: "No such pokemon" });
      } else {
        return res.json({
          err: err,
          massage: "Failed to fetch pokemon from poke.api",
        });
      }
    });
});

app.get("/api/type/:name", (req, res) => {
  const name = req.params.name;
  axios
    .get(POKE_URL + `type/${name}`)
    .then(({ data }) => {
      return res.json(data.pokemon);
    })
    .catch((err) => {
      return res.status(400).json({
        err: err,
        massage: "Could not get type/name from poke.api",
      });
    });
});

app.get("/api/collection", (req, res) => {
  return res.json(collection);
});

app.post("/api/collection/catch", (req, res) => {
  const pokemon = req.body;
  collection.push(pokemon);
  res.send(collection);
});

app.delete("/api/collection/release/:name", (req, res) => {
  pokemonName = req.params.name;
  collection = collection.filter((pokemon) => {
    return pokemon.name !== pokemonName;
  });
  res.send(collection);
});

app.use((error, req, res, next) => {
  res.status(400).send("Bad request");
  next(error);
});
module.exports = app;
