const GaleriaService = require('../../application/galeriaService');

class GaleriaController {
  constructor() {
    this.service = new GaleriaService();

    this.getGaleria = this.getGaleria.bind(this);
    this.createGaleria = this.createGaleria.bind(this);
  }

  async getGaleria(req, res) {
    try {
      const galeria = await this.service.getGaleria();
      res.json(galeria);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo galería' });
    }
  }

  async createGaleria(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'Archivo de imagen es requerido' });
      }
      
      const imgUrl = `/uploads/${req.file.filename}`;

      const newGaleria = await this.service.createGaleria(imgUrl);
      res.status(201).json(newGaleria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creando imagen' });
    }
  }
}

module.exports = GaleriaController;
