const pool = require('../../config/db');

const documentoRepo = {
  async obtenerTodos() {
    const [rows] = await pool.query('SELECT * FROM documentos ORDER BY id DESC');
    return rows;
  },

  async crear({ nombre, imagenUrl, link }) {
    const [result] = await pool.query(
      'INSERT INTO documentos (nombre, imagenUrl, link) VALUES (?, ?, ?)',
      [nombre, imagenUrl, link]
    );
    return { id: result.insertId, nombre, imagenUrl, link };
  }
};

module.exports = documentoRepo;
