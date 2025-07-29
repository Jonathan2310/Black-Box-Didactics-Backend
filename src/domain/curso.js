class Curso {
  constructor({ id, titulo, fecha, imagenUrl, cursoUrl, etiquetaPrecio, etiquetaNivel }) {
    this.id = id;
    this.titulo = titulo;
    this.fecha = fecha;
    this.imagenUrl = imagenUrl;
    this.cursoUrl = cursoUrl;
    this.etiquetaPrecio = etiquetaPrecio;
    this.etiquetaNivel = etiquetaNivel;
  }
}

module.exports = Curso;
