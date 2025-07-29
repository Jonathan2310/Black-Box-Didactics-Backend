const pool = require('../../config/db');

class TestimonioRepo {
  async getAll() {
    const [rows] = await pool.query('SELECT * FROM testimonios');
    return rows;
  }

  async create(nombre, descripcion) {
    const query = 'INSERT INTO testimonios (nombre, descripcion) VALUES (?, ?)';
    const [result] = await pool.query(query, [nombre, descripcion]);
    return { id: result.insertId, nombre, descripcion };
  }
}

module.exports = TestimonioRepo;
