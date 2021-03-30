/*
recibir el parametro de edad
dividir el texto basado en los guiones
usar la tercera parte de la fecha
convertir el texto a número
guardar el año en una var
obtener el año actual
hacer una resta (año actual - año de nacimiento)
 */

var fechaDeNacimiento = process.argv[2];
var fechaDividida = fechaDeNacimiento.split("-");
var anio = fechaDividida[2];
var anioEnNumero = parseInt(anio);

var hoy = new Date();
var anioActual = hoy.getFullYear();

console.log(anioActual - anioEnNumero);