const pool = require('../config/db');

class Empleado {
    static async findAll() {
        const result = await pool.query('SELECT * FROM empleado WHERE delete_at IS NULL');
        return result.rows;
    }

    static async create(data) {
        const { nombre_empleado, primer_apellido, segundo_apellido, numero_telefono, fecha_nacimiento, fecha_ingreso, usuarioId, puestoId } = data;
        const result = await pool.query(
            'INSERT INTO empleado(nombre_empleado, primer_apellido, segundo_apellido, numero_telefono, fecha_nacimiento, fecha_ingreso, usuario_id, puesto_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', 
            [nombre_empleado, primer_apellido, segundo_apellido, numero_telefono, fecha_nacimiento, fecha_ingreso, usuarioId, puestoId]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM empleado WHERE id_empleados = $1 AND delete_at IS NULL', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { nombre_empleado, primer_apellido, segundo_apellido, numero_telefono, fecha_nacimiento, fecha_ingreso, usuarioId, puestoId } = data;
        const result = await pool.query(
            'UPDATE empleado SET nombre_empleado = $1, primer_apellido = $2, segundo_apellido = $3, numero_telefono = $4, fecha_nacimiento = $5, fecha_ingreso = $6, usuario_id = $7, puesto_id = $8, updated_at = current_timestamp WHERE id_empleados = $9 AND delete_at IS NULL RETURNING *', 
            [nombre_empleado, primer_apellido, segundo_apellido, numero_telefono, fecha_nacimiento, fecha_ingreso, usuarioId, puestoId, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE empleado SET delete_at = current_timestamp WHERE id_empleados = $1 RETURNING *', [id]);
        return result.rows[0];
    }
    static async getAllempleadosExcel() {
        const query = `
            SELECT nombre_empleado, primer_apellido, segundo_apellido, numero_telefono, fecha_nacimiento, fecha_ingreso, usuario_id, puesto_id
            FROM empleado;
        `; // Define una consulta para obtener solo las columnas que son relevantes para la exportación a Excel.
        const result = await pool.query(query); // Ejecuta la consulta.
        return result.rows; // Devuelve los productos obtenidos en un formato simplificado para la exportación.
    }
}

module.exports = Empleado;
