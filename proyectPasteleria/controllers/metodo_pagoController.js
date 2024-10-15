const metodo_pago = require('../models/metodo_pagoModel');

class metodo_pagoController {

    static async getAllmetodo_pago(req, res) {
        try {
            const metodo_pagoData = await metodo_pago.findAll();
            res.json(metodo_pagoData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createmetodo_pago(req, res) {
        try {
            const metodo_pagoData = await metodo_pago.create(req.body);
            res.status(201).json(metodo_pagoData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getmetodo_pagoById(req, res) {
        try {
            const metodo_pagoData = await metodo_pago.findById(req.params.id);
            if (!metodo_pago) {
                return res.status(404).json({ message: "metodo de pago not found!" });
            }
            return res.json(metodo_pagoData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updatemetodo_pago(req, res) {
        try {
            const metodo_pagoData = await metodo_pago.update(req.params.id, req.body);
            if (!metodo_pagoData) {
                return res.status(404).json({ message: "status not found" });
            }
            return res.json(metodo_pagoData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deletemetodo_pago(req, res) {
        try {
            const result = await metodo_pago.delete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = metodo_pagoController;
