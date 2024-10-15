const pool = require('../config/db');

class metodo_pago {
    static async findAll() {
        const result = await pool.query('SELECT * FROM metodo_pago');
        return result.rows;
    }

    static async create(data) {
        const { tipo_pago } = data; 
        const result = await pool.query('INSERT INTO metodo_pago(tipo_pago) VALUES($1) RETURNING *', 
            [tipo_pago]);
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM metodo_pago WHERE id_metodo_pago = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { tipo_pago } = data;
        const result = await pool.query(
            'UPDATE metodo_pago SET tipo_pago = $1, updated_at = current_timestamp WHERE id_metodo_pago = $2 AND delete_at IS NULL RETURNING *', 
            [tipo_pago, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE metodo_pago SET delete_at = current_timestamp WHERE id_metodo_pago = $1 RETURNING *', [id]);
        return { message: 'metodo de pago deleted successfully' };
    }
}

module.exports = metodo_pago;
