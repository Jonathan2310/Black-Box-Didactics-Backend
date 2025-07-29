const express = require('express');
const router = express.Router();
const usuarioController = require('../../interfaces/controllers/usuarioController');
const authMiddleware = require('../../middlewares/authMiddleware');

// Rutas públicas
router.post('/', usuarioController.createUsuario);
router.post('/login', usuarioController.login);

// Rutas protegidas
router.get('/', authMiddleware, usuarioController.getUsuarios);
router.put('/me', authMiddleware, usuarioController.updatePerfil);
router.get('/perfil', authMiddleware, usuarioController.getPerfil);

module.exports = router;
