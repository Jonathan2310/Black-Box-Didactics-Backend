const documentoService = require('../../application/documentoService');

const documentosController = {
  getDocumentos: async (req, res) => {
    try {
      const documentos = await documentoService.obtenerDocumentos();
      res.json(documentos);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al obtener documentos' });
    }
  },

  postDocumento: async (req, res) => {
    try {
      const nuevo = await documentoService.crearDocumento(req.body);
      res.status(201).json(nuevo);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al crear documento' });
    }
  }
};

module.exports = documentosController;
