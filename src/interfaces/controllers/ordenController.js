const ordenService = require('../../application/ordenService');

exports.crearOrden = async (req, res) => {
  try {
    const orden = await ordenService.crearOrden(req.body);
    res.status(201).json(orden);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear orden', detalle: err.message });
  }
};

exports.obtenerOrdenes = async (req, res) => {
  try {
    const usuarioId = req.params.usuario_id;
    const ordenes = await ordenService.listarOrdenes(usuarioId);
    res.json(ordenes);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener órdenes' });
  }
};
