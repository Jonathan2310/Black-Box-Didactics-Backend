const productoRepo = require('../infrastructure/repositories/productoRepo');
const Producto = require('../domain/producto');

exports.getAllProductos = async () => {
  return await productoRepo.getAllProductos();
};

exports.getProductoById = async (id) => {
  return await productoRepo.getProductoById(id);
};

exports.buscarProductos = async (termino) => {
  return await productoRepo.buscarProductos(termino);
};

exports.getProductosRelacionados = async (categoria, id) => {
  return await productoRepo.getProductosRelacionados(categoria, id);
};

exports.createProducto = async (data) => {
  const producto = new Producto(data);
  return await productoRepo.createProducto(producto);
};

exports.eliminarProducto = async (id) => {
  const eliminado = await productoRepo.deleteProducto(id);
  if (!eliminado) {
    throw new Error('Producto no encontrado');
  }
  return true;
};

exports.getProductosPorCategoria = async (categoria) => {
  return await productoRepo.getProductosPorCategoria(categoria);
};