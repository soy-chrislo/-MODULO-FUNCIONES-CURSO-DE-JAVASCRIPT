"use strict";
// for (const element of elements){
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatMapPractice = exports.flatMapModule = void 0;
// }
// for (int i = 0; i < array.length; i++) {
// }
// ! Alternativas: reduce y concat
function flatMapModule() {
    // [[1,2,3],[4,5,6]].flat(1) // [1,2,3,4,5,6]
    /*
      var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
          return element for new_array
      }[, thisArg])
    */
    /*
      * arr: El array a ordenar, original.
      * callback: Función que produce un elemento del nuevo array, recibe tres argumentos:
        * currentValue: El elemento actual del array que se está procesando.
        * index: El índice del elemento actual dentro del array.
        * array: El array sobre el que se llama flatMap.
      * thisArg: Opcional. Valor a usar como this al ejecutar callback.
  
      ! Notas
      * El método flatMap() primero mapea cada elemento usando una función map, luego aplana el resultado en un nuevo array.
      * flat o "aplanado" es una práctica en programación funcional que consiste en convertir una estructura de datos compleja en una estructura de datos simple, como una lista plana de valores.
    */
    var array = [1, 2, 3, 4];
    console.log('Prueba 1: ', array.flatMap(function (x) { return x; }));
    // [1, 2, 3, 4]
    console.log('Prueba 2: ', array.flatMap(function (x) { return x * 2; }));
    // [2, 4, 6, 8]
    console.log('Prueba 3: ', array.flatMap(function (x) { return [x]; }));
    // [1, 2, 3, 4]
    console.log('Prueba 4: ', array.flatMap(function (x) { return [[x]]; }));
    // [[1], [2], [3], [4]]
    console.log('Prueba 5: ', array.map(function (x) { return [x]; }).flat(1));
    // [[1], [2], [3], [4]] -> [1, 2, 3, 4]
    /*
      ! ¿Por qué Prueba 3 es diferente de Prueba 5?
      * Se debe a que flatMap (aparte de ser un map) aplana el array, es decir, lo convierte en un array de un solo nivel.
        ! ¿Para que?
        * Para retornar múltiples valores en un array.
      * Mientras que map trabaja sobre el MISMO array, y todo lo que retorna se agrega al array original (de forma literal).
    */
}
exports.flatMapModule = flatMapModule;
function flatMapPractice() {
    var numeros = [1, 2, 3, 4, 5];
    console.log('Prueba 1: (con flatMap)', numeros.flatMap(function (x) { return [x, x * 2]; }));
    // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
    console.log('Prueba 2: (con map)', numeros.map(function (x) { return [x, x * 2]; }));
    // [[1, 2], [2, 4], [3, 6], [4, 8], [5, 10]]
    // ? Con map no se pueden retornar arrays (o múltiples valores) sin que se agreguen como un array dentro del array original. (dos niveles)
    // * flatMap si permite retornar arrays (o múltiples valores) sin que se agreguen como un array dentro del array original. (un nivel)
    /*
    ! CASOS PRÁCTICOS
    */
    // * Extraer valores (arrays) de un array de objetos
    var personas = [
        { nombre: 'Alice', amigos: ['Bob', 'Charlie'] },
        { nombre: 'Bob', amigos: ['Alice', 'David'] },
        { nombre: 'Charlie', amigos: ['Alice', 'Eve'] }
    ];
    var todosLosAmigos = personas.flatMap(function (persona) { return persona.amigos; });
    console.log('Todos los amigos: ', todosLosAmigos);
    console.log('Todos los amigos: (map)', personas.map(function (persona) { return persona.amigos; }));
    // * Dividir un string en letras individuales
    var palabras = ['casa', 'perro', 'gato'];
    var letrasIndividuales = palabras.flatMap(function (palabra) { return palabra.split(''); });
    console.log('letras individuales: ', letrasIndividuales);
    // con Map -> [['c', 'a', 's', 'a'], ['p', 'e', 'r', 'r', 'o'], ['g', 'a', 't', 'o']]
    // * Filtrado de elementos avanzado
    var productos = [
        { nombre: 'Laptop', categoria: 'Electrónicos' },
        { nombre: 'Camiseta', categoria: 'Ropa' },
        { nombre: 'Teléfono', categoria: 'Electrónicos' },
        { nombre: 'Zapatos', categoria: 'Ropa' },
        { nombre: 'Libro', categoria: 'Libros' }
    ];
    var criteriosDeBusqueda = ['Electrónicos', 'Ropa'];
    var resultadosDeBusqueda = criteriosDeBusqueda.flatMap(function (criterio) {
        return productos.filter(function (producto) { return producto.categoria === criterio; });
    });
    console.log('Resultado de busqueda: ', resultadosDeBusqueda);
    console.log('Resultado de busqueda: (con map)', criteriosDeBusqueda.map(function (criterio) {
        return productos.filter(function (producto) { return producto.categoria === criterio; });
    }));
}
exports.flatMapPractice = flatMapPractice;
