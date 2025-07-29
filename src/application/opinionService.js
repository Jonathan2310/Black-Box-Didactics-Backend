const OpinionRepo = require('../infrastructure/repositories/opinionRepo');
const Opinion = require('../domain/opinion');

class OpinionService {
  constructor() {
    this.repo = new OpinionRepo();
  }

  async getOpiniones() {
    return await this.repo.getAll();
  }

  async createOpinion(nombre, descripcion, estrellas) {
    const opinion = new Opinion(nombre, descripcion, estrellas);
    return await this.repo.create(opinion);
  }
}

module.exports = OpinionService;
