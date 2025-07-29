const PreguntaRespuestaRepo = require('../infrastructure/repositories/preguntaRespuestaRepo');

class PreguntaRespuestaService {
  constructor() {
    this.repo = new PreguntaRespuestaRepo();
  }

  async getPreguntas() {
    return await this.repo.getAll();
  }

  async createPregunta(nombre, descripcion) {
    const fecha = new Date();
    return await this.repo.create(nombre, descripcion, fecha);
  }

  async getRespuestas(preguntaId) {
    return await this.repo.getRespuestasByPreguntaId(preguntaId);
  }

  async responder(preguntaId, respuesta, nombre) {
    return await this.repo.addRespuesta(preguntaId, respuesta, nombre);
  }
}

module.exports = PreguntaRespuestaService;
