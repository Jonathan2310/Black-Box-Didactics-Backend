const usuarioService = require('../../application/usuarioService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.getAllUsuarios();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

exports.createUsuario = async (req, res) => {
  const { nombre, correo, contraseña, confirmarContraseña } = req.body;

  // Validaciones básicas
  if (!nombre || !correo || !contraseña || !confirmarContraseña) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  if (contraseña !== confirmarContraseña) {
    return res.status(400).json({ error: 'Las contraseñas no coinciden.' });
  }

  try {
    // Validar que el correo no exista
    const usuarioExistente = await usuarioService.getUsuarioPorCorreo(correo);
    if (usuarioExistente) {
      return res.status(409).json({ error: 'El correo ya está registrado.' });
    }

    const nuevoUsuario = await usuarioService.createUsuario({ nombre, correo, contraseña });
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    console.error('Error al crear usuario:', err);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};


exports.login = async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const usuario = await usuarioService.getUsuarioPorCorreo(correo);

    if (!usuario) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    const validPassword = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!validPassword) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: usuario.id, correo: usuario.correo }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo } });
  } catch (err) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

exports.updatePerfil = async (req, res) => {
  const id = req.user.id; // obtenido desde el token
  const { nombre, correo, contraseña } = req.body;


  try {
    const result = await usuarioService.updateUsuario(id, { nombre, correo, contraseña });

    if (!result || result.affectedRows === 0) {
      return res.status(404).json({ error: 'No se realizaron cambios o el usuario no existe' });
    }

    res.json({ message: 'Perfil actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar perfil' });
  }
};

exports.getPerfil = async (req, res) => {
  try {
    const id = req.user.id; // viene del token
    const usuario = await usuarioService.getUsuarioById(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
};
