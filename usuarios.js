var usuarios = [];

function agregarUsuario(nuevoUsuario) {
  usuarios.push(nuevoUsuario);
}

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

module.exports = {
  todos: usuarios,
  agregar: agregarUsuario,
  Usuario: Usuario,
};