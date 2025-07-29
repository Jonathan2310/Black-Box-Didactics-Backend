class Recurso {
  constructor({ id, titulo, descripcion, imgUrl, recursoUrl }) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imgUrl = imgUrl;
    this.recursoUrl = recursoUrl;
  }
}

module.exports = Recurso;
