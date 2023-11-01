"use strict";
// for (const element of elements){
Object.defineProperty(exports, "__esModule", { value: true });
exports.somePractice = exports.someModule = void 0;
// }
// for (int i = 0; i < array.length; i++) {
// }
/*
! FUNCIONES PARECIDAS:
* filter
* find
* includes
*/
function someModule() {
    // var result = arr.some(callback(element[, index[, array]])[, thisArg])
    /*
    * element: El elemento actual que se está procesando en el array.
    * index: El índice del elemento actual que se está procesando en el array.
    * array: El array sobre el que se llama some().
  
    * thisArg: Opcional. Valor para usar como this cuando se ejecute callback.
  
    ! Notas
    * Comprueba que al menos un elemento del array cumple con la condición dada, si es así retorna true, sino false.
    * Soporta contexto siempre y cuando se le pase un thisArg, y se asigne "use strict".
    */
    console.log(Array.prototype.some.call([1], function () { return true; }));
    var array = [1, 2, 3, 4, 5];
    console.log('¿Hay un elemento mayor a 3? ', array.some(function (currentValue) { return currentValue > 3; }));
    console.log('¿Hay un elemento igual a 3? ', array.some(function (element) { return element === 3; }));
}
exports.someModule = someModule;
function somePractice() {
    // Imitar a includes
    var array = [1, 2, 3, 4, 5];
    function includes(array, value) {
        return array.some(function (element) { return element === value; });
    }
    console.log('¿Se encuentra el elemento 13? (Utilizando función propia includes) ', includes(array, 13));
    console.log('¿Se encuentra el elemento 4? (Utilizando la función in-built) ', array.includes(4));
    var estudiantes = [
        {
            nombre: 'Pedro',
            grado: 11
        },
        {
            nombre: 'Juan',
            grado: 10
        },
        {
            nombre: 'Maria',
            grado: 11
        }
    ];
    console.log('¿Hay estudiantes de grado 10? ', estudiantes.some(function (estudiante) { return estudiante.grado === 10; }));
}
exports.somePractice = somePractice;
