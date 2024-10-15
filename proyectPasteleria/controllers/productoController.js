const Producto = require('../models/productoModel');
const ExcelJS = require('exceljs');

class productoController {

    static async getAllproductos(req, res) {
        try {
            const producto = await Producto.findAll();
            res.status(200).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getproductoById(req, res) {
        const { id } = req.params;
        try {
            const producto = await Producto.findById(id);
            if (!producto) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.status(200).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createproducto(req, res) {
        try {
            const producto = await Producto.create(req.body);
            res.status(201).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateproducto(req, res) {
        const { id } = req.params;
        try {
            const producto = await Producto.update(id, req.body);
            if (!producto) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.status(200).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    static async deleteProducto(req, res) {
        try {
            const result = await Producto.delete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    static async downloadProductosExcel(req, res) {
        try {
            const producto = await Producto.findAll(); // This should likely be inside ProductoController

            // Generar archivo Excel
            const workbook = new ExcelJS.Workbook();
            const worksheet = workbook.addWorksheet('producto');

            worksheet.columns = [
                { header: 'Nombre', key: 'nombre_producto', width: 50 },
                { header: 'imagen', key: 'imagen_url', width: 255 },
                { header: 'descripcion_producto', key: 'descripcion_producto', width: 50 },
                { header: 'precio', key: 'precio', width: 10 },
                { header: 'stock', key: 'stock', width: 15 },
                { header: 'categoria', key: 'categoria_id', width: 8 },

            ];

            producto.forEach(producto => {
                worksheet.addRow(producto);
            });

            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename=productos.xlsx');

            await workbook.xlsx.write(res);
            res.end();
        } catch (error) {
            console.error('Error generando archivo Excel:', error);
            res.status(500).send('Error generando archivo Excel');
        }
    }
}

module.exports = productoController;
