const express = require('express');
const router = express.Router();
const cursosController = require('../../interfaces/controllers/cursoController');

router.get('/', cursosController.getAll);
router.post('/', cursosController.create);

module.exports = router;
