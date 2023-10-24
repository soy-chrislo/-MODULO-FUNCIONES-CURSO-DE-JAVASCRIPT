"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPractice = exports.mapModule = void 0;
function mapModule() {
    /*
    var nuevo_array = arr.map(function callback(currentValue, index, array) {
      "use strict"
      your iterator
    }[, thisArg])
    
    * currentValue: El elemento actual que se está procesando en el array.
    * index: El índice del elemento actual que se está procesando en el array.
    * array: El array sobre el que se llama map.
    
    * thisArg: Opcional. Valor para usar como this cuando se ejecute callback.
    
    ! Notas
    * Realiza una serie de operaciones sobre cada elemento del array original, y devuelve un array nuevo con los resultados.
    * No modifica el array original. (Aunque si el callback lo hace)
    * No se puede detener o cortar el bucle map, a menos que se lance una excepción.
    * RETURN obligatorio, se utiliza para devolver el nuevo valor del elemento.
    * CONTINUE y BREAK no funcionan. (Tampoco se deberían usar)
    
    ! Posibilidades
    * Modificar las propiedades de los objetos.
    * Ejecutar una operación a cada elemento de un arreglo.
    * Realizar conversiones de los elementos.
    * Separar una cadena de texto en un array.
    */
    // for (const element of elements){
    // }
    // for (int i = 0; i < array.length; i++) {
    // }
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var namesArray = ['Juan', 'Pedro', 'Maria', 'Jose', 'Luis', 'Ana', 'Luisa', 'Pablo', 'Jorge'];
    var objectArray;
    var arrayResult;
    arrayResult = array.map(function (value, index, array) {
        // console.log(value, index, array)
        return value * 2;
    });
    console.log({ arrayResult: arrayResult });
    arrayResult = array.map(function (value, index) {
        return 'algo';
    });
    console.log({ arrayResult: arrayResult });
    arrayResult = array.map(function (value, index) {
        if (index === 5) {
            return 'Guanabana';
        }
        return value;
    });
    console.log({ arrayResult: arrayResult });
    objectArray = namesArray.map(function (value, index) {
        return { name: value, id: index };
    });
    console.log({ objectArray: objectArray });
    objectArray = namesArray.map(function (value, index) {
        return { value: this.valueObj };
    }, { valueObj: 'valor cualquiera' });
    console.log({ objectArray: objectArray });
    var objeto = {};
    objectArray = namesArray.map(function (value, index) {
        this[index] = value;
        this['año'] = 'hola';
        console.log(this);
        return this;
    }, objeto);
    console.log(objeto);
}
exports.mapModule = mapModule;
function mapPractice() {
}
exports.mapPractice = mapPractice;
