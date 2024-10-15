const Empleado = require('../models/empleadoModel');
const ExcelJS = require('exceljs'); // Don't forget to require ExcelJS if you're using it

class EmpleadoController {
    // Obtener todos los empleados
    static async getAllEmpleados(req, res) {
        try {
            const empleados = await Empleado.findAll();
            res.status(200).json(empleados);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Obtener un empleado por ID
    static async getEmpleadoById(req, res) {
        const { id } = req.params;
        try {
            const empleado = await Empleado.findById(id);
            if (!empleado) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            }
            res.status(200).json(empleado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Crear un nuevo empleado
    static async createEmpleado(req, res) {
        try {
            const empleado = await Empleado.create(req.body);
            res.status(201).json(empleado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    // Actualizar un empleado por ID
    static async updateEmpleado(req, res) {
        const { id } = req.params;
        try {
            const empleado = await Empleado.update(id, req.body);
            if (!empleado) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.status(200).json(empleado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    // Eliminar un empleado por ID (soft delete)
    static async deleteEmpleado(req, res) {
        try {
            const result = await Empleado.delete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Descargar productos en formato Excel (esto parece pertenecer a un controlador diferente)
    static async downloadEmpleadosExcel(req, res) {
        try {
            const empleado = await Empleado.findAll(); // This should likely be inside ProductoController

            // Generar archivo Excel
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('empleado');

            worksheet.columns = [
                { header: 'Nombre', key: 'nombre_empleado', width: 50 },
                { header: 'primer_apellido', key: 'primer_apellido', width: 50 },
                { header: 'segundo_apellido', key: 'segundo_apellido', width: 50 },
                { header: 'numero_telefono', key: 'numero_telefono', width: 10 },
                { header: 'fecha_nacimiento', key: 'fecha_nacimiento', width: 15 },
                { header: 'fecha_ingreso', key: 'fecha_ingreso', width: 15 },
                { header: 'usuario', key: 'usuario_id', width: 8 },
                { header: 'puesto', key: 'puesto_id', width: 8 },

            ];

            empleado.forEach(empleado => {
                worksheet.addRow(empleado);
            });

            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename=empleado.xlsx');

            await workbook.xlsx.write(res);
            res.end();
        } catch (error) {
            console.error('Error generando archivo Excel:', error);
            res.status(500).send('Error generando archivo Excel');
        }
    }
}

module.exports = EmpleadoController;
