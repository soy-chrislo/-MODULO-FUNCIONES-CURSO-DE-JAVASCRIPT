"use strict";
// for (const element of elements){
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPractice = exports.findModule = void 0;
// }
// for (int i = 0; i < array.length; i++) {
// }
/*
! FUNCIONES PARECIDAS:
* filter
* includes
* some
*/
function findModule() {
    // var result = arr.find(callback(element[, index[, array]])[, thisArg])
    /*
    * element: El elemento actual que se está procesando en el array.
    * index: El índice del elemento actual que se está procesando en el array.
    * array: El array sobre el que se llama find().
  
    * thisArg: Opcional. Valor para usar como this cuando se ejecute callback.
  
    ! Notas
    * Retorna el primer elemento de un arreglo que cumpla con la condición dada. Si es findIndex, retorna el índice.
    * Soporta contexto siempre y cuando se le pase un thisArg, y se asigne "use strict".
    */
    var array = [1, 2, 3, 4, 5];
    var result = array.find(function (currentValue) { return currentValue > 3; });
    console.log(result);
}
exports.findModule = findModule;
function findPractice() {
    var inventario = [
        { nombre: 'manzanas', cantidad: 2 },
        { nombre: 'bananas', cantidad: 0 },
        { nombre: 'cerezas', cantidad: 5 }
    ];
    var cerezas = inventario.findIndex(function (fruta) { return fruta.nombre === 'cerezass'; });
    // const hayCerezas = cerezas !== undefined
    var hayCerezas = cerezas !== -1;
    console.log(cerezas, hayCerezas);
}
exports.findPractice = findPractice;
