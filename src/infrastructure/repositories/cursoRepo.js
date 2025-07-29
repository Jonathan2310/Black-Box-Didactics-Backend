const db = require('../../config/db');
const Curso = require('../../domain/curso');

const cursoRepo = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM cursos ORDER BY fecha DESC');
    return rows.map(row => new Curso(row));
  },

  async create(data) {
    const { titulo, fecha, imagenUrl, cursoUrl, etiquetaPrecio, etiquetaNivel } = data;
    const [result] = await db.query(
      'INSERT INTO cursos (titulo, fecha, imagenUrl, cursoUrl, etiquetaPrecio, etiquetaNivel) VALUES (?, ?, ?, ?, ?, ?)',
      [titulo, fecha, imagenUrl, cursoUrl, etiquetaPrecio, etiquetaNivel]
    );
    return { id: result.insertId, ...data };
  }
};

module.exports = cursoRepo;
