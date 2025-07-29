class Carrito {
  constructor(id, usuario_id, producto_id, nombre, precio, imagen, descripcion, cantidad) {
    this.id = id;
    this.usuario_id = usuario_id;
    this.producto_id = producto_id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
  }
}

module.exports = Carrito;
