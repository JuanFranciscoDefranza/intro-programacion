function sumardosnumeros(numerouno, numerodos){
    var suma = numerouno + numerodos;
    return suma; 
}

function restardosnumeros(numerotres, numerocuatro){
    var restar = numerotres - numerocuatro;
    return restar;
}

function devolvermeelmasgrande(primernumero, segundonumero){
    var  elmasgrande = Math.max(primernumero, segundonumero);
    return elmasgrande;
}

function esPar (numero){
    var num = numero %2;
    if (num == 0){
        return true;
    } else {
        return false;
    }
}

function esmayoraveinte(numero){
    var mayora20 = numero > 20;
    return mayora20;
}

function nombrecompleto(nombre, apellido){
    var nc = nombre + " " + apellido;
    return nc;
}

function capitalizar(palabra){
    var cap = palabra[0].toUpperCase() + palabra.slice(1)
    return cap;
 }   
 
 function primerapalabra(frase){
     var primera = frase.split(" ", 1);
     return primera;
 }






console.log(sumardosnumeros(10, 100))
console.log(restardosnumeros(60,120))
console.log(devolvermeelmasgrande(300, 350))
console.log(esPar(4))
console.log(esmayoraveinte(21))
console.log(nombrecompleto("Juan Francisco", "Defranza"))
console.log(capitalizar("remoto"))
console.log(primerapalabra("hola como estas"))