/*
* Los operadores permiten:
  * Incrementar o decrementar en 1 el valor de una variable. No aplica para tipos primitivos de forma directa.
  ! Lo mas complejo es entender el orden de ejecución de los operadores: pre-incremento, post-incremento, pre-decremento, post-decremento.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement
export default function incrementDecrement() {
  /*
  console.log(++1) --> SyntaxError: Invalid left-hand side expression in prefix operation
  console.log((++1))
  console.log(1++)
  */
  let a = 1
  console.log(a++) // 1
  console.log(a) // 2
  console.log(++a) // 3
  let b = 1
  let c = b++
  console.log({ b, c })

  let contador = 0

  // ? Pre-incremento
  for (let i = 0; i < 10; i++) {
    console.log(++contador, ' ', contador)
  }

  contador = 0
  // ? Post-incremento
  for (let i = 0; i < 10; i++) {
    console.log(contador++, ' ', contador)
  }

  // * ¿Quieres evitar enredos? No uses incrementos o decrementos en la misma línea que otras operaciones.
  // ! Siguiendo eso, para ambos casos es indiferente usar pre o post incremento/decremento. Lo importante es que no se mezclen con otras operaciones.

  contador = 0
  // ? Pre-incremento
  for (let i = 0; i < 10; i++) {
    ++contador
    console.log(contador)
  }

  contador = 0
  // ? Post-incremento
  for (let i = 0; i < 10; i++) {
    console.log(contador)
    contador++
  }

}