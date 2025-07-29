const eventosService = require('../../application/eventosService');

exports.getEventos = async (req, res) => {
  try {
    const eventos = await eventosService.obtenerEventos();
    res.json(eventos);
  } catch (error) {
    console.error('Error al obtener eventos:', error.message);
    res.status(500).json({ error: 'Error al obtener eventos' });
  }
};

exports.createEvento = async (req, res) => {
  try {
    const { titulo, descripcion, fecha } = req.body;
    const urlImagen = req.file?.filename || null;

    if (!titulo || !descripcion || !fecha || !urlImagen) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const nuevoEvento = await eventosService.crearEvento({
      titulo,
      descripcion,
      fecha,
      urlImagen
    });

    res.status(201).json(nuevoEvento);
  } catch (error) {
    console.error('Error al crear evento:', error.message);
    res.status(500).json({ error: 'Error al crear evento' });
  }
};
