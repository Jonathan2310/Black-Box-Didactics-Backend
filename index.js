const express = require('express');
const dotenv = require('dotenv');
const usuarioRoutes = require('./src/infrastructure/routes/usuarioRoutes');
const productoRoutes = require('./src/infrastructure/routes/productoRoutes');
const carritoRoutes = require('./src/infrastructure/routes/carritoRoutes');
const ordenRoutes = require('./src/infrastructure/routes/ordenRoutes');
const stripeRoutes = require('./src/infrastructure/routes/stripeRoutes');
const eventoRoutes = require('./src/infrastructure/routes/eventoRoutes');
const documentoRoutes = require('./src/infrastructure/routes/documentoRoutes');
const cursoRoutes = require('./src/infrastructure/routes/cursoRoutes');
const recursoRoutes = require('./src/infrastructure/routes/recursoRoutes');
const tutorialRoutes = require('./src/infrastructure/routes/tutorialRoutes');
const galeriaRoutes = require('./src/infrastructure/routes/galeriaRoutes');
const opinionRoutes = require('./src/infrastructure/routes/opinionRoutes');
const testimonioRoutes = require('./src/infrastructure/routes/testimonioRoutes');
const preguntaRespuestaRoutes = require('./src/infrastructure/routes/preguntaRespuestaRoutes');


dotenv.config();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// Rutas
app.use('/api/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/carrito', carritoRoutes);
app.use('/api/ordenes', ordenRoutes);
app.use('/api/pagos', stripeRoutes);
app.use('/eventos', eventoRoutes);
app.use('/documentos', documentoRoutes);
app.use('/cursos', cursoRoutes);
app.use('/recursos', recursoRoutes);
app.use('/tutoriales', tutorialRoutes);
app.use('/galeria', galeriaRoutes);
app.use('/opiniones', opinionRoutes);
app.use('/testimonios', testimonioRoutes);
app.use('/preguntaRespuesta', preguntaRespuestaRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
