const express = require("express");
const route = express.Router();
const homeController = require("./controllers/homeController");
const cadastrarTrabalhoController = require("./controllers/cadastrarTrabalhoController");
const loginController = require("./controllers/loginController");
const middlewareGlobal = require('./middlewares/middleware')

route.get("/", homeController.index);
route.get('/login', loginController.index)
route.post('/cadastrarTrabalho/login', loginController.login)
route.get("/cadastrarTrabalho", cadastrarTrabalhoController.cadastro);
route.post("/sendTrabalho", cadastrarTrabalhoController.sendTrabalho);

module.exports = route;
