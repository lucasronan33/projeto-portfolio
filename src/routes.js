const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')

route.get('/', homeController.index)
route.get('/cadastrarTrabalho', homeController.cadastro)
// route.post('/sendTrabalho', homeController.sendCadastro)

module.exports = route