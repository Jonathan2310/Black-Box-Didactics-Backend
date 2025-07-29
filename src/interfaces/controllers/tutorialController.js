const tutorialService = require("../../application/tutorialService");

const tutorialController = {
  async getAll(req, res) {
    try {
      const tutoriales = await tutorialService.getAll();
      res.json(tutoriales);
    } catch (error) {
      console.error("Error al obtener tutoriales:", error);
      res.status(500).json({ error: "Error al obtener tutoriales" });
    }
  },

  async create(req, res) {
    try {
      const { titulo, imgUrl, tutorialUrl } = req.body;

      if (!titulo || !imgUrl || !tutorialUrl) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
      }

      const nuevo = await tutorialService.create({ titulo, imgUrl, tutorialUrl });
      res.status(201).json(nuevo);
    } catch (error) {
      console.error("Error al crear tutorial:", error);
      res.status(500).json({ error: "Error al crear tutorial" });
    }
  },
};

module.exports = tutorialController;
