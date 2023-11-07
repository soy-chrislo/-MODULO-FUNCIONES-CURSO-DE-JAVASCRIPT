/*
* El operador grouping permite:
  * Controlar la precedencia de operaciones.
  * Actual como un contenedor para expresiones arbitrarias.
  ! No es el mismo que se utiliza en las funciones.
  * Agrupar valores literales sin la necesidad de utilizar variables.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping
export default function grouping() {
  console.log(1 + 2 * 3) // -> 7
  console.log((1 + 2) * 3) // -> 9

  const a = () => {
    console.log('a')
    return 1
  }
  const b = () => {
    console.log('b')
    return 2
  }
  const c = () => {
    console.log('c')
    return 3
  }

  console.log(a() + (b() + c()))
  // * Las funciones se siguen ejecutando de izquierda a derecha, pero las expresiones se evalúan de derecha a izquierda.

  /*
  function autoEjecutable(){
    console.log('Autoejecutable')
  }() -> SyntaxError: Unexpected token ')'
  */
 ;(function Autoejecutable(){
    console.log('Autoejecutable')
 }())
 const autoEjecutable = (() => { console.log('Autoejecutable'); return 1; })()
 console.log({ autoEjecutable })

//  const retornarExpLiteral = () => { a: 1, b: 2 } // SyntaxError: Unexpected token ':'
 const retornarExpLiteral = () => ({ a: 1, b: 2 })
 console.log(retornarExpLiteral())

//  1.toString() --> SyntaxError: Invalid or unexpected token
(1).toString()
if (typeof (1).toString() === "string") console.log('1 es un string')
}