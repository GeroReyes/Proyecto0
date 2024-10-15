const categoria = require('../models/categoriaModel');

class categoriaController {

    static async getAllcategoria(req, res) {
        try {
            const categoriaData = await categoria.findAll();
            res.json(categoriaData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createcategoria(req, res) {
        try {
            const categoriaData = await categoria.create(req.body);
            res.status(201).json(categoriaData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getcategoriaById(req, res) {
        try {
            const categoriaData = await categoria.findById(req.params.id);
            if (!categoriaData) {
                return res.status(404).json({ message: "categoria not found!" });
            }
            return res.json(categoriaData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updatecategoria(req, res) {
        try {
            const categoriaData = await categoria.update(req.params.id, req.body);
            if (!categoriaData) {
                return res.status(404).json({ message: "categoria not found" });
            }
            return res.json(categoriaData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deletecategoria(req, res) {
        try {
            const result = await categoria.delete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = categoriaController;
