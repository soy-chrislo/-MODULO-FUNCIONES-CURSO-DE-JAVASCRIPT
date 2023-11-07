"use strict";
/*
* El operador coma permite:
  * Separar los parámetros de una función al definirla, y separar los argumentos al invocarla.
  * Separar los atributos de un objeto y desestructurarlos.
  * Definir múltiples variables en una misma línea.
  * Inicializar elementos en un arreglo y desestructurarlos.
  * Especificar los elementos a importar y exportar en un módulo. (Aunque son objetos)
  * Procesas operaciones en un `return`.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator
export default function comma() {
  ;((a, b, c) => console.log(a, b, c))(1, 2, 3); // -> 1 2 3

  let x, y, z;

  const obj = {
    a: 1,
    b: 2,
  }

  const { elem1, elem2 } = obj

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [a, b, c, d, e, f, g, h, i] = array

  /*
  import { elem1, elem2 } from './barrel.js'

  export { elem1, elem2 }
  */

  const voidArray = [,,,,,,].forEach((elem, index) => console.log(elem, index)) 
  console.log(voidArray)

  function foo() {
    let x;
    return (x = 100 + 1, x)
  }
  console.log({ x: foo() })

}