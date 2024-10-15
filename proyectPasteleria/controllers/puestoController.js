const puesto = require('../models/puestoModel');
const rol = require('../models/puestoModel');

class puestoController {

    static async getAllpuesto(req, res) {
        try {
            const puestoData = await puesto.findAll();
            res.json(puestoData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createpuesto(req, res) {
        try {
            const puestoData = await puesto.create(req.body);
            res.status(201).json(puestoData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getpuestoById(req, res) {
        try {
            const puestoData = await puesto.findById(req.params.id);
            if (!puestoData) {
                return res.status(404).json({ message: "Role not found!" });
            }
            return res.json(puestoData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updatepuesto(req, res) {
        try {
            const puestoData = await puesto.update(req.params.id, req.body);
            if (!puestoData) {
                return res.status(404).json({ message: "Role not found" });
            }
            return res.json(puestoData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deletepuesto(req, res) {
        try {
            const result = await puesto.delete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = puestoController;
