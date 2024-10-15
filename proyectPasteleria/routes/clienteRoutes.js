const express = require('express');
const ClienteController = require('../controllers/clienteController');

const router = express.Router();

// Obtener todos los clientes
router.get('/cliente', ClienteController.getAllcliente);

// Obtener un cliente por ID
router.get('/cliente/:id', ClienteController.getclienteById);

// Crear un nuevo cliente
router.post('/cliente', ClienteController.createcliente);

// Actualizar un cliente por ID
router.put('/cliente/:id', ClienteController.updatecliente);

// Eliminar un cliente por ID (soft delete)
router.delete('/cliente/:id', ClienteController.deletecliente);

router.get('/clientes/excel', ClienteController.downloadClientesExcel);

module.exports = router;
