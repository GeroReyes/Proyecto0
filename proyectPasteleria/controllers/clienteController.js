const Cliente = require('../models/clienteModel'); // Avoid duplicating this import
const ExcelJS = require('exceljs');

class ClienteController {
    // Obtener todos los clientes
    static async getAllcliente(req, res) {
        try {
            const clientes = await Cliente.findAll();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Obtener un cliente por ID
    static async getclienteById(req, res) {
        const { id } = req.params;
        try {
            const cliente = await Cliente.findByPk(id); // Use findByPk for primary key in Sequelize
            if (!cliente) {
                return res.status(404).json({ message: 'Cliente no encontrado' });
            }
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Crear un nuevo cliente
    static async createcliente(req, res) {
        try {
            const cliente = await Cliente.create(req.body);
            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Actualizar un cliente por ID
    static async updatecliente(req, res) {
        const { id } = req.params;
        try {
            const cliente = await Cliente.update(id, req.body);
            if (!cliente) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    // Eliminar un cliente por ID (soft delete)
    static async deletecliente(req, res) {
        try {
            const result = await Cliente.delete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Descargar listado de clientes en Excel
    static async downloadClientesExcel(req, res) {
        try {
            const clientes = await Cliente.findAll();

            // Generar archivo Excel
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('Cliente');

            worksheet.columns = [
                { header: 'Nombre', key: 'nombre_cliente', width: 50 },
                { header: 'Primer Apellido', key: 'primer_apellido', width: 50 },
                { header: 'Segundo Apellido', key: 'segundo_apellido', width: 50 },
                { header: 'Número Teléfono', key: 'numero_telefono', width: 10 },
                { header: 'Dirección', key: 'direccion', width: 50 },
                { header: 'Fecha Ingreso', key: 'fecha_ingreso', width: 15 },
                { header: 'Usuario', key: 'usuario_id', width: 8 },
                { header: 'Tipo de Cliente', key: 'tipo_cliente_id', width: 8 },
            ];

            clientes.forEach(clientes => {
                worksheet.addRow(clientes);
            });

            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename=clientes.xlsx');

            await workbook.xlsx.write(res);
            res.end();
        } catch (error) {
            console.error('Error generando archivo Excel:', error);
            res.status(500).send('Error generando archivo Excel');
        }
    }
}

module.exports = ClienteController;
