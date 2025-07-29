const db = require('../../config/db');
const Evento = require('../../domain/evento');

const eventoRepo = {
  async getAllEventos() {
    const [rows] = await db.query('SELECT * FROM eventos ORDER BY fecha DESC');
    return rows.map(row => new Evento(row));
  },

  async createEvento(evento) {
    const { titulo, descripcion, fecha, urlImagen } = evento;
    const [result] = await db.query(
      'INSERT INTO eventos (titulo, descripcion, fecha, urlImagen) VALUES (?, ?, ?, ?)',
      [titulo, descripcion, fecha, urlImagen]
    );
    return { id: result.insertId, ...evento };
  }
};

module.exports = eventoRepo;
