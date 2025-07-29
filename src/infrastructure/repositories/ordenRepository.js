const db = require('../../config/db');
const Orden = require('../../domain/orden');

const ordenRepository = {
  async crearOrden(orden) {
    const [result] = await db.query(
      'INSERT INTO ordenes (usuario_id, total, estado, fecha) VALUES (?, ?, ?, ?)',
      [orden.usuario_id, orden.total, orden.estado, orden.fecha]
    );
    return { ...orden, id: result.insertId };
  },

  async obtenerOrdenesPorUsuario(usuario_id) {
    const [rows] = await db.query('SELECT * FROM ordenes WHERE usuario_id = ?', [usuario_id]);
    return rows.map(row => new Orden(row));
  }
};

module.exports = ordenRepository;
