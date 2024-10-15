const Usuario = require('../models/usuarioModel');

class UsuarioController {
    // Obtener todos los usuarios
    static async getAllUsuarios(req, res) {
        try {
            const usuarios = await Usuario.findAll();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Obtener un usuario por ID
    static async getUsuarioById(req, res) {
        const { id } = req.params;
        try {
            const usuario = await Usuario.findById(id);
            if (!usuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Crear un nuevo usuario
    static async createUsuario(req, res) {
        try {
            const newUsuario = await Usuario.create(req.body);
            res.status(201).json(newUsuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Actualizar un usuario por ID
    static async updateUsuario(req, res) {
        const { id } = req.params;
        try {
            const usuario = await Usuario.update(id, req.body);
            if (!usuario) {
                return res.status(404).json({ message: 'usuario no encontrado' });
            }
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Eliminar un usuario por ID (soft delete)
    static async deleteUsuario(req, res) {
        const { id } = req.params;
        try {
            const deletedUsuario = await Usuario.delete(id);
            if (!deletedUsuario) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.status(200).json(deletedUsuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UsuarioController;
