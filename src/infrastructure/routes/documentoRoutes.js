const express = require('express');
const router = express.Router();
const documentosController = require('../../interfaces/controllers/documentoController');

router.get('/', documentosController.getDocumentos);
router.post('/', documentosController.postDocumento);

module.exports = router;
