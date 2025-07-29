const pool = require('../../config/db');

class OpinionRepo {
  async getAll() {
    const query = 'SELECT * FROM opiniones';
    const [rows] = await pool.query(query);
    return rows;
  }

  async create(opinion) {
    const query = 'INSERT INTO opiniones (nombre, descripcion, estrellas) VALUES (?, ?, ?)';
    const values = [opinion.nombre, opinion.descripcion, opinion.estrellas];
    const [result] = await pool.query(query, values);
    return { id: result.insertId, ...opinion };
  }
}

module.exports = OpinionRepo;
