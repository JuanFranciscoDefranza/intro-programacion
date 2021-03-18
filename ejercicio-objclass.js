var numbers = {
    numero1: 3,
    numero2: 13,
    numero3: 26,
    numero4: 33,
    numero5: 42,
    numero6: 50,
}

console.log(numbers)
console.log(numbers.numero1)

var datospersonales = {
    nombre: "santi",
    edad: 32,
    juegosprefes: ["nfs", "cod", "starwars"]
}

console.log(datospersonales)

var objtmix1 = {
    mejorpeli: "vengadores",
    peliculas: {
        pelisaccion: "armamortal",
        pelisficcion: "ironman",
    }
}

console.log(objtmix1.mejorpeli)
console.log(objtmix1)

var objtmix2 = {
    marvel: {
        fase1: "iron man",
        fase2: "captain america"
    },
    unaFuncionQueReste: function restar(numero1, numero2) {
        var restar = numero1 - numero2;
        return restar
}

}

console.log(objtmix2)
console.log(objtmix2.fase1)
console.log(objtmix2.unaFuncionQueReste(10, 5))

class animal {
    constructor (alimentacion, reproduccion){
        this.alimentacion = alimentacion
        this.reproduccion = reproduccion
    }
}

var animal1 = new animal("herviboro", "sexual");
var animal2 = new animal("carnivoro", "asexual");


console.log(animal1)
console.log(animal2)

class auto {
    constructor (tipo, motor){
        this.tipo = tipo;
        this.motor = motor;
    }
}

var auto1 = new auto("americanmuscle", "v8")
var auto2 = new auto("japones", "motorturbo")

console.log(auto1)
console.log(auto2)