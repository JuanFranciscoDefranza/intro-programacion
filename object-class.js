var misdatos = {
    nombre: "Juan",
    edad: 32,
    comidasprefes:["hamburguesa", "pizza"]
}



console.log(misdatos.nombre)


class Persona{
    constructor(nombre){
        this.nombre = nombre;
    }
    nombre = ""
    edad = 0 
}

var yo = new Persona("Juan")
console.log(yo.nombre)

class Articulo{
    constructor(a, b){
        this.titulo = a;
        this.texto = b; 
    }
    cambiarTitulo(nuevoTitulo){
        this.titulo = nuevoTitulo
    }
    titulo = ""
    texto = ""
}

var articuloPrimero = new Articulo("titulo a", "hola, como estas?");
var articuloSegundo = new Articulo("titulo b", "hola, como estas b?");

console.log(articuloPrimero);
console.log(articuloSegundo);

articuloPrimero.cambiarTitulo("nuevo titulo del articulo primero");
console.log(articuloPrimero);