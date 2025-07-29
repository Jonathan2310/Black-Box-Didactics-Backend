const recursoService = require('../../application/recursoService');

const recursoController = {
  crear: async (req, res) => {
    try {
      const recurso = await recursoService.crearRecurso(req.body);
      res.status(201).json(recurso);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear recurso' });
    }
  },

  obtenerTodos: async (req, res) => {
    try {
      const recursos = await recursoService.obtenerRecursos();
      res.status(200).json(recursos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener recursos' });
    }
  },

  eliminar: async (req, res) => {
    try {
      await recursoService.eliminarRecurso(req.params.id);
      res.status(200).json({ mensaje: 'Recurso eliminado' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar recurso' });
    }
  }
};

module.exports = recursoController;
