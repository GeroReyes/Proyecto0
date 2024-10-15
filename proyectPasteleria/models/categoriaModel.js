const pool = require('../config/db');

class categoria {
    static async findAll() {
        const result = await pool.query('SELECT * FROM categoria');
        return result.rows;
    }

    static async create(data) {
        const {  nombre_categoria } = data; 
        const result = await pool.query('INSERT INTO categoria( nombre_categoria) VALUES($1) RETURNING *', 
            [ nombre_categoria]);
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM categoria WHERE id_categoria = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const {  nombre_categoria } = data;
        const result = await pool.query(
            'UPDATE categoria SET nombre_categoria = $1, updated_at = current_timestamp WHERE id_categoria = $2 AND delete_at IS NULL RETURNING *', 
            [ nombre_categoria, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE categoria SET delete_at = current_timestamp WHERE  id_categoria = $1 RETURNING *', [id]);
        return { message: 'categoria deleted successfully' };
    }
}

module.exports = categoria;
