const tipo_cliente = require('../models/tipo_clienteModel');

class tipo_clienteController {

    static async getAlltipo_cliente(req, res) {
        try {
            const tipo_clienteData = await tipo_cliente.findAll();
            res.json(tipo_clienteData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createtipo_cliente(req, res) {
        try {
            const tipo_clienteData = await tipo_cliente.create(req.body);
            res.status(201).json(tipo_clienteData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async gettipo_clienteById(req, res) {
        try {
            const tipo_clienteData = await tipo_cliente.findById(req.params.id);
            if (!tipo_clienteData) {
                return res.status(404).json({ message: "tipo_cliente not found!" });
            }
            return res.json(tipo_clienteData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updatetipo_cliente(req, res) {
        try {
            const tipo_clienteData = await tipo_cliente.update(req.params.id, req.body);
            if (!tipo_clienteData) {
                return res.status(404).json({ message: "tipo_cliente not found" });
            }
            return res.json(tipo_clienteData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deletetipo_cliente(req, res) {
        try {
            const result = await tipo_cliente.delete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = tipo_clienteController;
