const express = require('express');
const GaleriaController = require('../../interfaces/controllers/galeriaController');
const upload = require('../../middlewares/uploadImage'); 

const router = express.Router();
const controller = new GaleriaController();

router.get('/', controller.getGaleria);
router.post('/', upload.single('imgUrl'), controller.createGaleria);

module.exports = router;
