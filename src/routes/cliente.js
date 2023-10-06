const express = require('express');
const ControllerCliente = require('../controllers/cliente.js');

const route = new ControllerCliente()
const router = express.Router()

router.post('/api/cliente', route.Add)
router.get('/api/cliente/', route.PegarTodos)
router.get('/api/cliente/:id', route.PegarUm)
router.delete('/api/cliente/:id', route.Delete)
router.put('/api/cliente/:id', route.Update)
module.exports = router