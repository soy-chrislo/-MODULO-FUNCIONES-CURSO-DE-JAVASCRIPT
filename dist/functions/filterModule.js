"use strict";
// for (const element of elements){
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterPractice = exports.filterModule = void 0;
// }
// for (int i = 0; i < array.length; i++) {
// }
function filterModule() {
    /*
    var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
  
    * currentValue: El elemento actual que se está procesando en el array.
    * index: El índice del elemento actual que se está procesando en el array.
    * array: El array sobre el que se llama filter().
  
    * thisArg: Opcional. Valor para usar como this cuando se ejecute callback.
  
    ! Notas
    * filter() debe retornar siempre un valor booleano, que indica si el elemento actual cumple con el criterio de filtrado definido o no.
    */
    var array = [1, 2, 3, 4, 5];
    var arrayObjects = [
        { name: 'Juan' }, { name: 'Pedro' }, { name: 'Maria' }, { pokemon: 'Pikachu' }, { name: 2 }
    ];
    var result = arrayObjects.filter(function (currentValue) {
        console.log(currentValue);
        if (!('name' in currentValue)) {
            return false;
        }
        if (!(typeof currentValue.name === 'string')) {
            return false;
        }
        return true;
    });
    console.log(result);
    console.log(Array.prototype.filter.call(array, function (element) { return true; }));
}
exports.filterModule = filterModule;
function filterPractice() {
    var products = ['ipods', 'iphone', 'imac', 'sony ericson', 'huawei mate', 'samsung galaxy a52s'];
    var appleProducts = products.filter(function (products) { return products.split('')[0].toLowerCase() === 'i'; });
    console.log(appleProducts);
    var people = [
        {
            name: 'Juan',
            age: 20
        },
        {
            name: 'Pedro',
            age: 30
        },
        {
            name: 'Laura',
            age: 40
        },
        {
            name: 'Maria',
            age: 15
        }
    ];
    var adults = Array.prototype.filter.call(people, function (person) { return person.age >= 18; });
    console.log(adults);
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var evenNumbers = numbers.filter(function (number) { return number % 2 === 0; });
    console.log(evenNumbers);
}
exports.filterPractice = filterPractice;
