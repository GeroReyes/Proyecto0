const pool = require('../config/db');

class puesto {
    static async findAll() {
        const result = await pool.query('SELECT * FROM puesto');
        return result.rows;
    }

    static async create(data) {
        const { nombre_puesto, sueldo, hora_entrada, hora_salida } = data; 
        const result = await pool.query('INSERT INTO puesto(nombre_puesto, sueldo, hora_entrada, hora_salida) VALUES($1, $2, $3, $4) RETURNING *', 
            [nombre_puesto, sueldo, hora_entrada, hora_salida]);
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM puesto WHERE id_puesto = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { nombre_puesto, sueldo, hora_entrada, hora_salida } = data;
        const result = await pool.query(
            'UPDATE puesto SET  nombre_puesto = $1, sueldo = $2, hora_entrada = $3, hora_salida = $4, updated_at = current_timestamp WHERE id_puesto = $5 AND delete_at IS NULL RETURNING *', 
            [nombre_puesto, sueldo, hora_entrada, hora_salida, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE puesto SET delete_at = current_timestamp WHERE id_puesto = $1 RETURNING *', [id]);
        return { message: 'puesto deleted successfully' };
    }
}

module.exports = puesto;
