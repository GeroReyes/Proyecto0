const express = require('express');
const puestoController = require('../controllers/puestoController');

const router = express.Router();

router.get('/puesto', puestoController.getAllpuesto);
router.get('/puesto/:id', puestoController.getpuestoById);
router.post('/puesto', puestoController.createpuesto);
router.put('/puesto/:id', puestoController.updatepuesto);
router.delete('/puesto/:id', puestoController.deletepuesto);

module.exports = router;
