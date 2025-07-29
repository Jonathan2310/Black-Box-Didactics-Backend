const carritoService = require('../../application/carritoService');

exports.getCarrito = async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const carritoInfo = await carritoService.getCarrito(usuario_id);
    res.json(carritoInfo);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el carrito' });
  }
};


exports.addProducto = async (req, res) => {
  try {
    const { usuario_id, producto_id } = req.body;
    await carritoService.addToCarrito(usuario_id, producto_id);
    res.json({ mensaje: 'Producto agregado al carrito' });
  } catch (err) {
    res.status(500).json({ error: 'Error al agregar producto al carrito' });
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    const { usuario_id, producto_id } = req.params;
    await carritoService.removeFromCarrito(usuario_id, producto_id);
    res.json({ mensaje: 'Producto eliminado del carrito' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
