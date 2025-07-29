const cursoRepo = require('../../src/infrastructure/repositories/cursoRepo');

const cursoService = {
  getAllCursos: () => cursoRepo.getAll(),
  createCurso: (data) => cursoRepo.create(data),
};

module.exports = cursoService;
