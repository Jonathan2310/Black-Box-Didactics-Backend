const db = require('../../config/db');

exports.getCarritoByUsuario = async (usuario_id) => {
  const [rows] = await db.query(`
    SELECT p.id, p.nombre, p.descripcion, p.precio, p.imagen
    FROM carrito c
    JOIN productos p ON c.producto_id = p.id
    WHERE c.usuario_id = ?
  `, [usuario_id]);
  return rows;
};

exports.addProductoToCarrito = async (usuario_id, producto_id) => {
    await db.query(`
        INSERT INTO carrito (usuario_id, producto_id)
        VALUES (?, ?)
    `, [usuario_id, producto_id]);

    return true;
};

exports.deleteProductoFromCarrito = async (usuario_id, producto_id) => {
  const [result] = await db.query(`
    DELETE FROM carrito 
    WHERE id = (
      SELECT id FROM (
        SELECT id FROM carrito 
        WHERE usuario_id = ? AND producto_id = ?
        LIMIT 1
      ) AS subquery
    )
  `, [usuario_id, producto_id]);

  return result.affectedRows > 0;
};