class Orden {
  constructor({ id, usuario_id, total, estado, fecha }) {
    this.id = id;
    this.usuario_id = usuario_id;
    this.total = total;
    this.estado = estado;
    this.fecha = fecha;
  }
}

module.exports = Orden;
