const db = require('../../config/db');
const Recurso = require('../../domain/recurso');

const recursoRepo = {
  async crear(recursoData) {
    const { titulo, descripcion, imgUrl, recursoUrl } = recursoData;
    const [result] = await db.query(
      'INSERT INTO recursos (titulo, descripcion, imgUrl, recursoUrl) VALUES (?, ?, ?, ?)',
      [titulo, descripcion, imgUrl, recursoUrl]
    );
    return new Recurso({ id: result.insertId, ...recursoData });
  },

  async obtenerTodos() {
    const [rows] = await db.query('SELECT * FROM recursos');
    return rows.map(row => new Recurso(row));
  },

  async eliminar(id) {
    await db.query('DELETE FROM recursos WHERE id = ?', [id]);
  }
};

module.exports = recursoRepo;
