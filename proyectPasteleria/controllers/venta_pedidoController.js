const VentaPedido = require('../models/venta_pedidoModel');

class VentaPedidoController {

    static async getAllVentaPedido(req, res) {
        try {
            const ventaPedidos = await VentaPedido.findAll();
            res.status(200).json(ventaPedidos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getVentaPedidoById(req, res) {
        const { id } = req.params;
        try {
            const ventaPedido = await VentaPedido.findById(id);
            if (!ventaPedido) {
                return res.status(404).json({ message: 'Venta de pedido no encontrado' });
            }
            res.status(200).json(ventaPedido);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createVentaPedido(req, res) {
        try {
            const ventaPedido = await VentaPedido.create(req.body);
            res.status(201).json(ventaPedido);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateVentaPedido(req, res) {
        const { id } = req.params;
        try {
            const ventaPedido = await VentaPedido.update(req.body, { where: { id } });
            if (!ventaPedido) {
                return res.status(404).json({ message: 'Venta de pedido no encontrado' });
            }
            res.status(200).json({ message: 'Venta de pedido actualizado', ventaPedido });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteVentaPedido(req, res) {
        const { id } = req.params;
        try {
            const result = await VentaPedido.destroy({ where: { id } });
            if (!result) {
                return res.status(404).json({ message: 'Venta de pedido no encontrado' });
            }
            res.status(200).json({ message: 'Venta de pedido eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = VentaPedidoController;
