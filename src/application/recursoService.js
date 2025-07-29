const recursoRepo = require('../infrastructure/repositories/recursoRepo');

const recursoService = {
  crearRecurso: async (recursoData) => {
    return await recursoRepo.crear(recursoData);
  },

  obtenerRecursos: async () => {
    return await recursoRepo.obtenerTodos();
  },

  eliminarRecurso: async (id) => {
    await recursoRepo.eliminar(id);
  }
};

module.exports = recursoService;
