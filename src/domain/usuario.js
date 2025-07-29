class Usuario {
  constructor({ id = null, nombre, correo, contraseña }) {
    this.id = id;
    this.nombre = nombre;
    this.correo = correo;
    this.contraseña = contraseña;
  }
}

module.exports = Usuario;
