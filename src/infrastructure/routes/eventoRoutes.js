const express = require('express');
const router = express.Router();
const eventoController = require('../../interfaces/controllers/eventoController');
const uploadImage = require('../../../src/middlewares/uploadImage');

router.get('/', eventoController.getEventos);
router.post('/', uploadImage.single('imagen'), eventoController.createEvento);

module.exports = router;
