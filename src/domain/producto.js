class Producto {
  constructor({ id, nombre, descripcion, precio, imagen, categoria, caracteristicas = [] }) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
    this.categoria = categoria;
    this.caracteristicas = caracteristicas;
  }
}
module.exports = Producto;