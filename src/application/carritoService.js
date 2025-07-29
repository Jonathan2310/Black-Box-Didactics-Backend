const carritoRepo = require('../infrastructure/repositories/carritoRepo');
const carrito = require('../domain/carrito');

exports.getCarrito = async (usuario_id) => {
  const productos = await carritoRepo.getCarritoByUsuario(usuario_id);

  let total = 0;
  productos.forEach(producto => {
    total += Number(producto.precio);
    });

  const envio = total > 0 ? 500 : 0;
  const totalGeneral = total + envio;

  return {
    productos,
    total: total.toFixed(2),
    envio,
    totalGeneral: (total + envio).toFixed(2)
  };
};


exports.addToCarrito = async (usuario_id, producto_id) => {
  return await carritoRepo.addProductoToCarrito(usuario_id, producto_id);
};

exports.removeFromCarrito = async (usuario_id, producto_id) => {
  const eliminado = await carritoRepo.deleteProductoFromCarrito(usuario_id, producto_id);
  if (!eliminado) throw new Error('Producto no encontrado en el carrito');
  return true;
};