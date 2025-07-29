const TestimonioService = require('../../application/testimonioService');

class TestimonioController {
  constructor() {
    this.service = new TestimonioService();

    this.getTestimonios = this.getTestimonios.bind(this);
    this.createTestimonio = this.createTestimonio.bind(this);
  }

  async getTestimonios(req, res) {
    try {
      const testimonios = await this.service.getTestimonios();
      res.json(testimonios);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo testimonios' });
    }
  }

  async createTestimonio(req, res) {
    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    try {
      const nuevoTestimonio = await this.service.createTestimonio(nombre, descripcion);
      res.status(201).json(nuevoTestimonio);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear testimonio' });
    }
  }
}

module.exports = TestimonioController;
