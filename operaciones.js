function ejecutarOperacion(objetoOperacion) {
    if (objetoOperacion.operacion == "+") {
      return sumar(objetoOperacion.numeros);
    } else if (objetoOperacion.operacion == "-") {
      return restar(objetoOperacion.numeros);
    }
  }
  
  function sumar(numeros) {
    return numeros[0] + numeros[1];
  }
  
  function restar(numeros) {
    return numeros[0] - numeros[1];
  }
  
  module.exports = {
    ejecutarOperacion: ejecutarOperacion,
  };