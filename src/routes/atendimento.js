const express = require('express');
const ControllerAtendimento = require('../controllers/atendimento.js');

const route = new ControllerAtendimento()
const routerAtendimento = express.Router()

routerAtendimento.post('/api/atendimento', route.Add)
routerAtendimento.get('/api/atendimento', route.PegarTodos)
routerAtendimento.get('/api/atendimento/:idAtendimento', route.PegarUm)
routerAtendimento.delete('/api/atendimento/:idAtendimento', route.Delete)
routerAtendimento.put('/api/atendimento/:idAtendimento', route.Update)
module.exports = routerAtendimento