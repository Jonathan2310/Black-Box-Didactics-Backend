const TestimonioRepo = require('../infrastructure/repositories/testimonioRepo');

class TestimonioService {
  constructor() {
    this.repo = new TestimonioRepo();
  }

  async getTestimonios() {
    return await this.repo.getAll();
  }

  async createTestimonio(nombre, descripcion) {
    return await this.repo.create(nombre, descripcion);
  }
}

module.exports = TestimonioService;
