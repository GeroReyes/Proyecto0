const pool = require('../config/db');

class venta_pedido {
    static async findAll() {
        const result = await pool.query('SELECT * FROM venta_pedido WHERE delete_at IS NULL');
        return result.rows;
    }

    static async create(data) {
        const {pago_total_pedido, empleado_id, cliente_id, metodo_pago_id} = data;
        const result = await pool.query(
            'INSERT INTO venta_pedido(pago_total_pedido, empleado_id, cliente_id, metodo_pago_id) VALUES($1, $2, $3, $4) RETURNING *', 
            [pago_total_pedido, empleado_id, cliente_id, metodo_pago_id]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM venta_pedido WHERE id_pedido = $1 AND delete_at IS NULL', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { pago_total_pedido, empleado_id, cliente_id, metodo_pago_id } = data;
        const result = await pool.query(
            'UPDATE venta_pedido SET pago_total_pedido = $1, empleado_id = $2, cliente_id = $3, metodo_pago_id = $4, update_at = current_timestamp WHERE id_pedido = $5 AND delete_at IS NULL RETURNING *', 
            [pago_total_pedido, empleado_id, cliente_id, metodo_pago_id, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE venta_pedido SET delete_at = current_timestamp WHERE id_pedido = $1 RETURNING *', [id]);
        return result.rows[0];
    }
}

module.exports = venta_pedido;
