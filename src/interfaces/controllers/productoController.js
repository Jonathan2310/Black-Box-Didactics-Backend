const productoService = require('../../application/productoService');

exports.getProductos = async (req, res) => {
  try {
    const productos = await productoService.getAllProductos();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

exports.getProducto = async (req, res) => {
  try {
    const producto = await productoService.getProductoById(req.params.id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener producto' });
  }
};

exports.buscar = async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: 'Falta el parámetro query' });

  try {
    const productos = await productoService.buscarProductos(query);
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al buscar productos' });
  }
};

exports.relacionados = async (req, res) => {
  const { categoria, id } = req.params;

  try {
    const relacionados = await productoService.getProductosRelacionados(categoria, id);
    res.json(relacionados);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos relacionados' });
  }
};

exports.crearProducto = async (req, res) => {
  try {
    const imagen = req.file ? req.file.filename : null;
    const nuevoProducto = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      imagen,
      categoria: req.body.categoria,
      caracteristicas: JSON.parse(req.body.caracteristicas || '[]')
    };

    const producto = await productoService.createProducto(nuevoProducto);
    res.status(201).json(producto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

exports.eliminarProducto = async (req, res) => {
  const id = req.params.id;
  try {
    await productoService.eliminarProducto(id);
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (err) {
    res.status(404).json({ mensaje: err.message });
  }
};

exports.getPorCategoria = async (req, res) => {
  const { categoria } = req.params;
  try {
    const productos = await productoService.getProductosPorCategoria(categoria);
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos por categoría' });
  }
};