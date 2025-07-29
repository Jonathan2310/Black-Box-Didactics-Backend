class Evento {
  constructor({ id, titulo, descripcion, fecha, urlImagen }) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.urlImagen = urlImagen;
  }
}

module.exports = Evento;
