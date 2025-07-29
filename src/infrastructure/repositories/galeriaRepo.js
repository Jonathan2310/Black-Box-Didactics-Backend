const pool = require('../../config/db');

class GaleriaRepo {
  async getAll() {
    const query = 'SELECT * FROM galeria';
    const [rows] = await pool.query(query);
    return rows;
  }

  async create(imgUrl) {
    const query = 'INSERT INTO galeria (imgUrl) VALUES (?)';
    const [result] = await pool.query(query, [imgUrl]);
    return { id: result.insertId, imgUrl };
  }
}

module.exports = GaleriaRepo;
