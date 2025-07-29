const OpinionService = require('../../application/opinionService');

class OpinionController {
  constructor() {
    this.service = new OpinionService();

    this.getOpiniones = this.getOpiniones.bind(this);
    this.createOpinion = this.createOpinion.bind(this);
  }

  async getOpiniones(req, res) {
    try {
      const opiniones = await this.service.getOpiniones();
      res.json(opiniones);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener opiniones' });
    }
  }

  async createOpinion(req, res) {
    try {
      const { nombre, descripcion, estrellas } = req.body;
      if (!nombre || !descripcion || estrellas == null) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
      }

      const nuevaOpinion = await this.service.createOpinion(nombre, descripcion, estrellas);
      res.status(201).json(nuevaOpinion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear opinión' });
    }
  }
}

module.exports = OpinionController;
