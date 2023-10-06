const express = require('express');
const ControllerCachorro = require('../controllers/cachorro.js');

const route = new ControllerCachorro()
const routerCachorro = express.Router()

routerCachorro.post('/api/cachorro', route.Add)
routerCachorro.get('/api/cachorro/', route.PegarTodos)
routerCachorro.get('/api/cachorro/:idCachorro', route.PegarUm)
routerCachorro.delete('/api/cachorro/:idCachorro', route.Delete)
routerCachorro.put('/api/cachorro/:idCachorro', route.Update)
module.exports = routerCachorro