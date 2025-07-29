const PreguntaRespuestaService = require('../../application/preguntaRespuestaService');

class PreguntaRespuestaController {
  constructor() {
    this.service = new PreguntaRespuestaService();

    this.getPreguntas = this.getPreguntas.bind(this);
    this.createPregunta = this.createPregunta.bind(this);
    this.getRespuestas = this.getRespuestas.bind(this);
    this.addRespuesta = this.addRespuesta.bind(this);
  }

  async getPreguntas(req, res) {
    try {
      const preguntas = await this.service.getPreguntas();
      res.json(preguntas);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo preguntas' });
    }
  }

  async createPregunta(req, res) {
    try {
      const { nombre, descripcion } = req.body;
      if (!nombre || !descripcion) {
        return res.status(400).json({ message: 'Nombre y descripción son requeridos' });
      }

      const pregunta = await this.service.createPregunta(nombre, descripcion);
      res.status(201).json(pregunta);
    } catch (error) {
      res.status(500).json({ message: 'Error creando la pregunta' });
    }
  }

  async getRespuestas(req, res) {
    try {
      const { id } = req.params;
      const respuestas = await this.service.getRespuestas(id);
      res.json(respuestas);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo respuestas' });
    }
  }

  async addRespuesta(req, res) {
    try {
      const { id } = req.params;
      const { respuesta, nombre } = req.body;

      if (!respuesta || !nombre) {
        return res.status(400).json({ message: 'Respuesta y nombre son requeridos' });
      }

      const nuevaRespuesta = await this.service.responder(id, respuesta, nombre);
      res.status(201).json(nuevaRespuesta);
    } catch (error) {
      res.status(500).json({ message: 'Error agregando la respuesta' });
    }
  }
}

module.exports = PreguntaRespuestaController;
