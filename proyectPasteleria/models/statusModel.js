const pool = require('../config/db');

class status {
    static async findAll() {
        const result = await pool.query('SELECT * FROM status');
        return result.rows;
    }

    static async create(data) {
        const { nombre_estatus } = data; 
        const result = await pool.query('INSERT INTO status(nombre_estatus) VALUES($1) RETURNING *', 
            [nombre_estatus]);
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM status WHERE id_estatus = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { nombre_estatus } = data;
        const result = await pool.query(
            'UPDATE status SET  nombre_estatus = $1, updated_at = current_timestamp WHERE id_estatus = $2 AND delete_at IS NULL RETURNING *', 
            [nombre_estatus, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE status SET delete_at = current_timestamp WHERE id_estatus = $1 RETURNING *', [id]);
        return { message: 'status deleted successfully' };
    }
}

module.exports = status;
