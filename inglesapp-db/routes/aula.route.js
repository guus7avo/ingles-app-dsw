const express = require("express");
const aulaController = require("../controllers/aula.controller.js");

const routes = express.Router;

routes.post("/aula", aulaController.create);

module.exports = {
    routes,
}
