const express = require('express');
const tipo_clienteController = require('../controllers/tipo_clienteController');

const router = express.Router();

router.get('/tipo_cliente', tipo_clienteController.getAlltipo_cliente);
router.get('/tipo_cliente/:id', tipo_clienteController.gettipo_clienteById);
router.post('/tipo_cliente', tipo_clienteController.createtipo_cliente);
router.put('/tipo_cliente/:id', tipo_clienteController.updatetipo_cliente);
router.delete('/tipo_cliente/:id', tipo_clienteController.deletetipo_cliente);

module.exports = router;
