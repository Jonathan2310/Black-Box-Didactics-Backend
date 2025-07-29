const db = require('../../config/db');

exports.getAllProductos = async () => {
  const [productos] = await db.query('SELECT * FROM productos');
  for (const producto of productos) {
    const [caracts] = await db.query('SELECT descripcion FROM caracteristicas WHERE producto_id = ?', [producto.id]);
    producto.caracteristicas = caracts.map(c => c.descripcion);
  }
  return productos;
};

exports.getProductoById = async (id) => {
  const [rows] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
  const producto = rows[0];
  if (!producto) return null;
  const [caracts] = await db.query('SELECT descripcion FROM caracteristicas WHERE producto_id = ?', [id]);
  producto.caracteristicas = caracts.map(c => c.descripcion);
  return producto;
};

exports.buscarProductos = async (termino) => {
  const likeTerm = `%${termino}%`;
  const [rows] = await db.query(
    'SELECT * FROM productos WHERE nombre LIKE ? OR categoria LIKE ?',
    [likeTerm, likeTerm]
  );
  return rows;
};

exports.getProductosRelacionados = async (categoria, id) => {
  const [rows] = await db.query(
    'SELECT * FROM productos WHERE categoria = ? AND id != ? LIMIT 4',
    [categoria, id]
  );
  return rows;
};

exports.createProducto = async (producto) => {
  const { nombre, descripcion, precio, imagen, categoria, caracteristicas } = producto;
  const [result] = await db.query(
    'INSERT INTO productos (nombre, descripcion, precio, imagen, categoria) VALUES (?, ?, ?, ?, ?)',
    [nombre, descripcion, precio, imagen, categoria]
  );
  const productoId = result.insertId;

  if (caracteristicas && caracteristicas.length > 0) {
    const insertCaracts = caracteristicas.map(desc => [productoId, desc]);
    await db.query('INSERT INTO caracteristicas (producto_id, descripcion) VALUES ?', [insertCaracts]);
  }

  return { id: productoId, ...producto };
};

exports.deleteProducto = async (id) => {
  const [result] = await db.query('DELETE FROM productos WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

exports.getProductosPorCategoria = async (categoria) => {
  const [rows] = await db.query('SELECT * FROM productos WHERE categoria = ?', [categoria]);
  return rows;
};