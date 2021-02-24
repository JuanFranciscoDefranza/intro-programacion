function sumardosnumeros(primernumero, segundonumero){
var res = primernumero + segundonumero;
    return res;
}

var resultado = sumardosnumeros(5, 20)

console.log(resultado);
console.log(sumardosnumeros(4, 3));
console.log(sumardosnumeros(38, 100));


function conIva(precio){
    var precioconIva = precio * 1.21;
    return precioconIva;
}

console.log(conIva(50));