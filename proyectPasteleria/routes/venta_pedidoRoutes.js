const express = require('express');
const router = express.Router();
const VentaPedidoController = require('../controllers/venta_pedidoController');

// Ruta para obtener todos los venta_pedidos
router.get('/venta-pedidos', VentaPedidoController.getAllVentaPedido);

// Ruta para obtener un venta_pedido por ID
router.get('/venta-pedidos/:id', VentaPedidoController.getVentaPedidoById);

// Ruta para crear un nuevo venta_pedido
router.post('/venta-pedidos', VentaPedidoController.createVentaPedido);

// Ruta para actualizar un venta_pedido existente
router.put('/venta-pedidos/:id', VentaPedidoController.updateVentaPedido);

// Ruta para eliminar un venta_pedido
router.delete('/venta-pedidos/:id', VentaPedidoController.deleteVentaPedido);

module.exports = router;
