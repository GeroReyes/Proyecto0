const express = require('express');
const metodo_pagoController = require('../controllers/metodo_pagoController');

const router = express.Router();

router.get('/metodo_pago', metodo_pagoController.getAllmetodo_pago);
router.get('/metodo_pago/:id', metodo_pagoController.getmetodo_pagoById);
router.post('/metodo_pago', metodo_pagoController.createmetodo_pago);
router.put('/metodo_pago/:id', metodo_pagoController.updatemetodo_pago);
router.delete('/metodo_pago/:id', metodo_pagoController.deletemetodo_pago);

module.exports = router;
