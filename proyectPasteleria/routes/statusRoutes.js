const express = require('express');
const statusController = require('../controllers/statusController');

const router = express.Router();

router.get('/status', statusController.getAllstatus);
router.get('/status/:id', statusController.getstatusById);
router.post('/status', statusController.createstatus);
router.put('/status/:id', statusController.updatestatus);
router.delete('/status/:id', statusController.deletestatus);

module.exports = router;
