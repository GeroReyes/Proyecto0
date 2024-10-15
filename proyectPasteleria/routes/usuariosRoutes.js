const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');


router.get('/usuarios', UsuarioController.getAllUsuarios);


router.get('/usuarios/:id', UsuarioController.getUsuarioById);


router.post('/usuarios', UsuarioController.createUsuario);


router.put('/usuarios/:id', UsuarioController.updateUsuario);


router.delete('/usuarios/:id', UsuarioController.deleteUsuario);

module.exports = router;
