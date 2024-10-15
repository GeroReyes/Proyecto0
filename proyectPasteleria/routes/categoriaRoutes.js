const express = require('express');
const categoriaController = require('../controllers/categoriaController');

const router = express.Router();

router.get('/categoria', categoriaController.getAllcategoria);
router.get('/categoria/:id', categoriaController.getcategoriaById);
router.post('/categoria', categoriaController.createcategoria);
router.put('/categoria/:id', categoriaController.updatecategoria);
router.delete('/categoria/:id', categoriaController.deletecategoria);

module.exports = router;
