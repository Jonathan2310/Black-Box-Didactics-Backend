const documentoRepo = require('../../src/infrastructure/repositories/documentoRepo');

const documentoService = {
  obtenerDocumentos: async () => {
    return await documentoRepo.obtenerTodos();
  },

  crearDocumento: async (data) => {
    return await documentoRepo.crear(data);
  }
};

module.exports = documentoService;
