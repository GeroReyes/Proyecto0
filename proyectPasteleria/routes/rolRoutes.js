const express = require('express');
const rolController = require('../controllers/rolController');

const router = express.Router();

router.get('/rol', rolController.getAllrol);
router.get('/rol/:id', rolController.getrolById);
router.post('/rol', rolController.createrol);
router.put('/rol/:id', rolController.updaterol);
router.delete('/rol/:id', rolController.deleterol);

module.exports = router;
