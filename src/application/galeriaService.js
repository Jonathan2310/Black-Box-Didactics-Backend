const GaleriaRepo = require('../infrastructure/repositories/galeriaRepo');

class GaleriaService {
  constructor() {
    this.repo = new GaleriaRepo();
  }

  async getGaleria() {
    return await this.repo.getAll();
  }

  async createGaleria(imgUrl) {
    return await this.repo.create(imgUrl);
  }
}

module.exports = GaleriaService;
