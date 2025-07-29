const bcrypt = require('bcrypt');
const Usuario = require('../domain/usuario');
const usuarioRepo = require('../infrastructure/repositories/usuarioRepo');
const db = require('../config/db');

exports.createUsuario = async (data) => {
  const hashedPassword = await bcrypt.hash(data.contraseña, 10);
  const nuevoUsuario = new Usuario({ ...data, contraseña: hashedPassword });
  return await usuarioRepo.create(nuevoUsuario);
};

exports.getUsuarioPorCorreo = async (correo) => {
  return await usuarioRepo.findByCorreo(correo);
};

exports.getAllUsuarios = async () => {
  return await usuarioRepo.findAll();
};

exports.updateUsuario = async (id, data) => {
  let dataToUpdate = { ...data };

  if (data.contraseña) {
    const hashedPassword = await bcrypt.hash(data.contraseña, 10);
    dataToUpdate.contraseña = hashedPassword;
  }

  return await usuarioRepo.update(id, dataToUpdate);
};

exports.getUsuarioById = async (id) => {
  const [result] = await db.query('SELECT id, nombre, correo FROM Usuario WHERE id = ?', [id]);
  return result[0];
};