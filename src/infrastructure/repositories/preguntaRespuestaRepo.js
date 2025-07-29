const pool = require('../../config/db');

class PreguntaRespuestaRepo {
  async getAll() {
    const query = 'SELECT * FROM preguntas_respuestas';
    const [rows] = await pool.query(query);
    return rows;
  }

  async create(nombre, descripcion, fecha) {
    const query = 'INSERT INTO preguntas_respuestas (nombre, descripcion, fecha) VALUES (?, ?, ?)';
    const [result] = await pool.query(query, [nombre, descripcion, fecha]);
    return { id: result.insertId, nombre, descripcion, fecha };
  }

  async getRespuestasByPreguntaId(preguntaId) {
    const query = 'SELECT * FROM respuestas WHERE pregunta_id = ?';
    const [rows] = await pool.query(query, [preguntaId]);
    return rows;
  }

  async addRespuesta(preguntaId, respuesta, nombre) {
    const fecha = new Date();
    const query = 'INSERT INTO respuestas (pregunta_id, respuesta, nombre, fecha) VALUES (?, ?, ?, ?)';
    const [result] = await pool.query(query, [preguntaId, respuesta, nombre, fecha]);
    return { id: result.insertId, preguntaId, respuesta, nombre, fecha };
  }
}

module.exports = PreguntaRespuestaRepo;
