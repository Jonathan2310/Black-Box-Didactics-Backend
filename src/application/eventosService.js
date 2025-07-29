const eventoRepo = require('../infrastructure/repositories/eventoRepo');
const Evento = require('../domain/evento');

const eventosService = {
  async obtenerEventos() {
    return await eventoRepo.getAllEventos();
  },

  async crearEvento(data) {
    const nuevoEvento = new Evento(data);
    return await eventoRepo.createEvento(nuevoEvento);
  }
};

module.exports = eventosService;
