var nombre = "Juan";
var numero = 45;

var yo = {
    nombre: "Juancho",
    edad: 33,
}

if(nombre != "Ramiro"){
    console.log("es Ramiro")
}else{
    console.log("no es ramiro")
}

var listadenumeros = [1, 8, 9, 10];

for(var posicion = 0; posicion < listadenumeros.length; posicion++){
    console.log(listadenumeros[posicion])
}
console.log("el final")

var posicion = 0;

while(posicion < listadenumeros.length){
    console.log(listadenumeros[posicion]);
    posicion++;
}
console.log("se termino")

switch(nombre){
    case "Juan":
        console.log("es juan");
    break;
    case "Ramiro":
        console.log("es ramiro");
    break;
    default:
        console.log("no es ninguno");
}