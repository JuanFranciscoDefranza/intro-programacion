var usuarios = require("./usuarios");

var usuarioUno = new usuarios.Usuario("Marce", "Zapaia");
var usuarioDos = new usuarios.Usuario("Carlos", "Zapaia");

usuarios.agregar(usuarioUno);
usuarios.agregar(usuarioDos);

console.log(usuarios.todos);