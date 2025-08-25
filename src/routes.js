const express = require("express");
const route = express.Router();
const homeController = require("./controllers/homeController");
const cadastrarTrabalhoController = require("./controllers/cadastrarTrabalhoController");
const loginController = require("./controllers/loginController");
const { middlewareLogin } = require('./middlewares/middleware')

// rotas index
route.get("/", homeController.index);
route.post('/sendmail', homeController.sendmail)

route.get('/contato', homeController.contato)

// rotas da area de cadastro de projetos
route.get('/login', loginController.index)
route.post('/cadastrarTrabalho/login', loginController.login)
route.get("/cadastrarTrabalho", middlewareLogin, cadastrarTrabalhoController.cadastro);
route.post("/sendTrabalho", middlewareLogin, cadastrarTrabalhoController.sendTrabalho);

module.exports = route;
