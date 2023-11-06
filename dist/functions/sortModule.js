"use strict";
/* eslint-disable @typescript-eslint/require-array-sort-compare */
// for (const element of elements){
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortPractice = exports.sortModule = void 0;
// }
// for (int i = 0; i < array.length; i++) {
// }
function sortModule() {
    // arr.sort([compareFunction])
    /*
        * arr: El array a ordenar, original.
        * compareFunction: Opcional. Especifica una función que define el orden de los elementos. Si se omite, el array se ordena según el valor de cada carácter Unicode, según la conversión a string de cada elemento.
  
        ! Notas
        * El método sort() ordena los elementos de un array.
        * Devuelve el array ordenado, pero la ordenación no es necesariamente estable.
          * Por defecto (sin argumentos) responde a la posición del valor del string de acuerdo a su valor Unicode.
        */
    var numeros = [1, 34, 2, 3, 41, 5, 35, 6, 343];
    /*
      Decimal - Unicode - Binario
      0 - 48 - 00110000
      1 - 49 - 00110001
      2 - 50 - 00110010
      3 - 51 - 00110011
      4 - 52 - 00110100
      5 - 53 - 00110101
      6 - 54 - 00110110
      7 - 55 - 00110111
      8 - 56 - 00111000
      9 - 57 - 00111001
      34 - 51 | 52 - 00110011 | 00110100
      35 - 51 | 53 - 00110011 | 00110101
      [ - 91 - 01011011
      a - 97 - 01100001
    */
    console.log('Numéros ', numeros.sort());
    // * Ascendente
    console.log('Ascendente ', numeros.sort(function (a, b) { return a - b; }));
    // * Descendente
    console.log('Descendente ', numeros.sort(function (a, b) { return b - a; }));
    // * A es mayor que B, ascendente
    console.log('A es mayor que B, ascendente ', numeros.sort(function (a, b) { return a > b ? 1 : -1; }));
    // * A es menor que B, descendente
    console.log('A es menor que B, descendente ', numeros.sort(function (a, b) { return a < b ? 1 : -1; }));
    /*
      * En la práctica es lo mismo, a - b o a > b retorna un valor trutly o falsy. Al retornar un valor trutly, se ordena de forma ascendente, al retornar un valor falsy, se ordena de forma descendente.
      */
    var textos = ['a', '[A', 'z', 'e', '1A', 'r', 't', 'y', '1a', '4r', 'u', 'i', 'o', 'p'];
    /*
      1. Numéros
      2. Caracteres especiales
      3. Mayúsculas
      4. Minúsculas
      */
    // Sin función de comparación
    console.log('Sin función de comparación: ', textos.sort());
    // * Siempre que A sea mayor que B, se ordenará de forma ascendente.
    console.log('A es mayor que B, ascendente: ', textos.sort(function (a, b) { return a > b ? 1 : -1; }));
    // * Siempre que A sea menor que B, se ordenará de forma descendente.
    console.log('A es menor que B, descendente', textos.sort(function (a, b) { return a < b ? 1 : -1; }));
    // ! La operación aritmética no hace efecto en caracteres.
    // * Restando A con B
    console.log('Restando A con B: ', textos.sort(function (a, b) { return a - b; }));
    // * Restando B con A
    console.log('Restando B con A: ', textos.sort(function (a, b) { return b - a; }));
    // ! TEST
    // * Se rompe todo, no se ordena.
    console.log('Retornando 0: ', textos.sort(function (a, b) { return 0; }));
    console.log('Retornando 1: ', textos.sort(function (a, b) { return 1; }));
}
exports.sortModule = sortModule;
function sortPractice() {
    // Repasando el algoritmo de sort
    var numeros = [1, 34, 2, 3, 41, 5, 35, 6];
    // ! No es posible, ya que Javascript no brinda el valor unicode de los tipos primitivos.
    // * Ascendente
    for (var i = 0; i < numeros.length; i++) {
        for (var j = 0; j < numeros.length; j++) {
            if (numeros[j] > numeros[j + 1]) {
                var aux = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = aux;
            }
        }
    }
    console.log('Ordenado ascendente: ', numeros);
    // * Descendente
    for (var i = 0; i < numeros.length; i++) {
        for (var j = 0; j < numeros.length; j++) {
            if (numeros[j] < numeros[j + 1]) {
                var aux = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = aux;
            }
        }
    }
    console.log('Ordenado descendente: ', numeros);
}
exports.sortPractice = sortPractice;
