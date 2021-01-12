const express = require("express");
const aulaController = require("../controllers/aula.controller.js");

const routes = express.Router();

routes.post("/aula", aulaController.create);
routes.get("/aula", aulaController.getAll);
routes.get("/aula/:id", aulaController.getById);
routes.put("/aula/:id", aulaController.alterById);
routes.delete("/aula/:id", aulaController.deleteById);

module.exports = routes;
