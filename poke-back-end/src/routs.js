const express = require ('express');
const routes = express.Router();

const GeneratePokemon = require("./controllers/generatepokemon");

routes.get ('/', GeneratePokemon.generate)

module.exports = routes;