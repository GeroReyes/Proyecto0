const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoContoller');

// Obtener todos los empleados
router.get('/empleados' ,empleadoController.getAllEmpleados);

// Obtener un empleado por ID
router.get('/empleados/:id', empleadoController.getEmpleadoById);

// Crear un nuevo empleado
router.post('/empleados', empleadoController.createEmpleado);

// Actualizar un empleado por ID
router.put('/empleados/:id', empleadoController.updateEmpleado);

// Eliminar un empleado (soft delete) por ID
router.delete('/empleados/:id', empleadoController.deleteEmpleado);

router.get('/excel', empleadoController.downloadEmpleadosExcel);

module.exports = router;
