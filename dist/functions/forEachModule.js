"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEachPractice = exports.forEachModule = void 0;
var tslib_1 = require("tslib");
/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
function forEachModule() {
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var objeto = { value: 'valor cualquiera', saludar: function () { console.log('saludando'); } };
    // ! Con Typescript
    var valor = array.forEach(function (value, index, array) {
        console.log(value, index, array);
        if (index === 5) {
            console.log('Haciendo return');
            return;
        }
        this.saludar();
        console.log(this.value);
    }, objeto);
    console.log({ valor: valor });
    // ! Con Javascript
    array.forEach(function (value, index, array) {
        'use strict';
        console.log(value, index, array);
        if (index === 5) {
            console.log('El indice es 5');
            array.push('Guanabana');
            console.log(array);
        }
        console.log(this.value);
    }, objeto);
    console.log('El estado final del array es', { array: array });
    // * Las funciones flecha no toman el this del contexto en el que se encuentran, sino que toman el this del contexto en el que fueron creadas, ósea el this del contexto global
    //   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    //   array.forEach((value, index, array) => {
    //     console.log(value, index, array)
    //     console.log(this.saludar())
    //   }, { value: 'valor cualquiera', saludar: () => { console.log('saludando') } })
}
exports.forEachModule = forEachModule;
// for (const element of elements){
// }
// for (int i = 0; i < array.length; i++) {
// }
function forEachPractice() {
    var _this = this;
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var arraySpare = [1, 2, , 4];
    // ! Que se pueda modificar el array, no significa que se DEBA hacer.
    console.log('-> Regla 1: No modificar el array original');
    array.forEach(function (value, index) {
        if (index === 5) {
            array.push('Guanabana');
        }
    });
    console.log({ array: array });
    // ! No realizar operaciones con arrays sparse
    console.log('-> Regla 2: No realizar operaciones con arrays sparse');
    arraySpare.forEach(function (value) {
        console.log(value);
    });
    console.log({ arraySpare: arraySpare });
    // ! No utilizar return, porque no RETORNA valores
    console.log('-> Regla 3: No utilizar return, porque no RETORNA valores');
    var value = array.forEach(function (value, index) {
        if (index === 5) {
            return value;
        }
        console.log(value);
    });
    console.log({ value: value });
    // ! No se puede cortar o detener el bucle, a menos que se lance una excepción
    console.log('-> Regla 4: No se puede cortar el bucle, a menos que se lance una excepción');
    try {
        array.forEach(function (value, index) {
            if (index === 5) {
                // throw new Error(`El favor del índice 5 es ${value}`)
            }
            console.log(value);
        });
    }
    catch (error) {
        console.log(error);
    }
    // ! No realizar operaciones asíncronas
    console.log('-> Regla 5: No realizar operaciones asíncronas');
    array.forEach(function (value, index) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var promise, _a, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    promise = new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve('hola amigo, estas mal, pide ayuda');
                        }, 2000);
                    });
                    _b = (_a = console).log;
                    return [4 /*yield*/, promise];
                case 1:
                    _b.apply(_a, [(_c.sent())]);
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.forEachPractice = forEachPractice;
