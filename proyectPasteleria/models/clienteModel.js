const pool = require('../config/db');

class cliente {
    static async findAll() {
        const result = await pool.query('SELECT * FROM cliente WHERE delete_at IS NULL');
        return result.rows;
    }

    static async create(data) {
        const {nombre_cliente, primer_apellido, segundo_apellido, numero_telefono, direccion, usuario_id, tipo_cliente_id } = data;
        const result = await pool.query(
            'INSERT INTO cliente(nombre_cliente, primer_apellido, segundo_apellido, numero_telefono, direccion, usuario_id, tipo_cliente_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
            [nombre_cliente, primer_apellido, segundo_apellido, numero_telefono, direccion, usuario_id, tipo_cliente_id]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM cliente WHERE id_cliente = $1 AND delete_at IS NULL', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { nombre_cliente, primer_apellido, segundo_apellido, numero_telefono, direccion, usuario_id, tipo_cliente_id } = data;
        const result = await pool.query(
            'UPDATE cliente SET nombre_cliente = $1, primer_apellido = $2, segundo_apellido = $3, numero_telefono = $4, direccion = $5, usuario_id = $6, tipo_cliente_id = $7, updated_at = current_timestamp WHERE id_cliente = $8 AND delete_at IS NULL RETURNING *', 
            [nombre_cliente, primer_apellido, segundo_apellido, numero_telefono, direccion, usuario_id, tipo_cliente_id, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE cliente SET delete_at = current_timestamp WHERE id_cliente = $1 RETURNING *', [id]);
        return result.rows[0];
    }

    static async getAllclientesExcel() {
        const query = `
            SELECT nombre_cliente, primer_apellido, segundo_apellido, numero_telefono, direccion, usuario_id, tipo_cliente_id
            FROM cliente;
        `; // Define una consulta para obtener solo las columnas que son relevantes para la exportación a Excel.
        const result = await pool.query(query); // Ejecuta la consulta.
        return result.rows; // Devuelve los productos obtenidos en un formato simplificado para la exportación.
    }
}

module.exports = cliente;
