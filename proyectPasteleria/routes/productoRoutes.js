const express = require('express');
const productoController = require('../controllers/productoController');

const router = express.Router();

router.get('/productos', productoController.getAllproductos);

router.post('/productos', productoController.createproducto);

router.put('/productos/:id', productoController.updateproducto);

router.delete('/productos/:id', productoController.deleteProducto);

// Define the Excel route before the dynamic ID route
router.get('/productos/excel', productoController.downloadProductosExcel);
router.get('/productos/:id', productoController.getproductoById);


module.exports = router;
