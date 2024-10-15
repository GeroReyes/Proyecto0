const status = require('../models/statusModel');

class statusController {

    static async getAllstatus(req, res) {
        try {
            const statusData = await status.findAll();
            res.json(statusData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createstatus(req, res) {
        try {
            const statusData = await status.create(req.body);
            res.status(201).json(statusData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getstatusById(req, res) {
        try {
            const statusData = await status.findById(req.params.id);
            if (!statusData) {
                return res.status(404).json({ message: "status not found!" });
            }
            return res.json(statusData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updatestatus(req, res) {
        try {
            const statusData = await status.update(req.params.id, req.body);
            if (!statusData) {
                return res.status(404).json({ message: "status not found" });
            }
            return res.json(statusData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deletestatus(req, res) {
        try {
            const result = await status.delete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = statusController;
