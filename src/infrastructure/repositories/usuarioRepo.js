const db = require('../../config/db');

exports.findAll = async () => {
  const [rows] = await db.query('SELECT * FROM Usuario');
  return rows;
};

exports.create = async ({ nombre, correo, contraseña }) => {
  const [result] = await db.query(
    'INSERT INTO Usuario (nombre, correo, contraseña) VALUES (?, ?, ?)',
    [nombre, correo, contraseña]
  );
  return { id: result.insertId, nombre, correo };
};

exports.findByCorreo = async (correo) => {
  const [rows] = await db.query('SELECT * FROM Usuario WHERE correo = ?', [correo]);
  return rows[0];
};

exports.update = async (id, { nombre, correo, contraseña }) => {
  const fields = [];
  const values = [];

  if (nombre) {
    fields.push('nombre = ?');
    values.push(nombre);
  }

  if (correo) {
    fields.push('correo = ?');
    values.push(correo);
  }

  if (contraseña) {
    fields.push('contraseña = ?');
    values.push(contraseña);
  }

  if (fields.length === 0) return null;

  values.push(id);

  const query = `UPDATE Usuario SET ${fields.join(', ')} WHERE id = ?`;

  const [result] = await db.query(query, values);

  return result;
};

