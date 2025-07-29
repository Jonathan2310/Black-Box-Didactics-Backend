const cursoService = require('../../application/cursoService');

const cursosController = {
  async getAll(req, res) {
    try {
      const cursos = await cursoService.getAllCursos();
      res.json(cursos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener cursos' });
    }
  },

  async create(req, res) {
    try {
      const curso = await cursoService.createCurso(req.body);
      res.status(201).json(curso);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear curso' });
    }
  }
};

module.exports = cursosController;
