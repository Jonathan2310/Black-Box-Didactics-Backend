const express = require('express');
const PreguntaRespuestaController = require('../../interfaces/controllers/preguntaRespuestaController');

const router = express.Router();
const controller = new PreguntaRespuestaController();

router.get('/', controller.getPreguntas);
router.post('/', controller.createPregunta);
router.get('/:id/respuestas', controller.getRespuestas);
router.post('/:id/respuestas', controller.addRespuesta);

module.exports = router;
