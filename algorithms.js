var listaDeNumeros = [1, 3, 6, 98, 105, 254, 987, 1023, 2000];

function buscar(numeros, numerosabuscar){
    for(let aux=0; aux < numeros.length; aux++){
        var numerodeestaposicion = numeros[aux];
        if(numerodeestaposicion == numerosabuscar){
            return numerosabuscar;
        }
    }
}

var encontrado = buscar(listaDeNumeros, 9876);

console.log(encontrado);






var listaDeNumeros = [1, 3, 6, 98, 105, 254, 987, 1023, 2000];

function buscar(numeros, numeroABuscar) {
  var laMitad = Math.floor(numeros.length / 2);
  var numeroDelMedio = numeros[laMitad];

  console.log("un ciclo", numeroDelMedio, numeroABuscar);

  if (numeroDelMedio == numeroABuscar) {
    return numeroDelMedio;
  } else if (numeroDelMedio > numeroABuscar) {
    return buscar(numeros.slice(1, laMitad), numeroABuscar);
  } else if (numeroDelMedio < numeroABuscar) {
    return buscar(numeros.slice(laMitad), numeroABuscar);
  }
}

var encontrado = buscar(listaDeNumeros, 2000);

console.log(encontrado);