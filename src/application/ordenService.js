const ordenRepository = require('../infrastructure/repositories/ordenRepository');
const Orden = require('../domain/orden');

const ordenService = {
  async crearOrden(data) {
    const nuevaOrden = new Orden({
      usuario_id: data.usuario_id,
      total: data.total,
      estado: 'pendiente',
      fecha: new Date()
    });

    return await ordenRepository.crearOrden(nuevaOrden);
  },

  async listarOrdenes(usuario_id) {
    return await ordenRepository.obtenerOrdenesPorUsuario(usuario_id);
  }
};

module.exports = ordenService;
