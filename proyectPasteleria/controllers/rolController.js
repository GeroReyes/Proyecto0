const rol = require('../models/rolModel');

class rolController {

    static async getAllrol(req, res) {
        try {
            const rolData = await rol.findAll();
            res.json(rolData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createrol(req, res) {
        try {
            const rolData = await rol.create(req.body);
            res.status(201).json(rolData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getrolById(req, res) {
        try {
            const rolData = await rol.findById(req.params.id);
            if (!rolData) {
                return res.status(404).json({ message: "Role not found!" });
            }
            return res.json(rolData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updaterol(req, res) {
        try {
            const rolData = await rol.update(req.params.id, req.body);
            if (!rolData) {
                return res.status(404).json({ message: "Role not found" });
            }
            return res.json(rolData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleterol(req, res) {
        try {
            const result = await rol.delete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = rolController;
