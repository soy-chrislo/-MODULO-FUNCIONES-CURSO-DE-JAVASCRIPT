/*
* El operador permite:
  * Evaluar una expresión y retornar un valor u otro dependiendo de si la expresión es verdadera o falsa.
  * Es una forma corta de escribir un if-else en una sola línea.
    * Pero con la limitante de que solo se puede realizar una asignación de variable. ("Limitante")
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// condition ? exprIfTrue : exprIfFalse

export default function ternary() {
  console.log(1 > 2 ? 'Es mayor' : 'Es menor')
  
  const age = 18
  const canDrive = age >= 18 ? 'Puede conducir' : 'No puede conducir'
  console.log({ canDrive })

  const person = {
    name: undefined,
    age: 18
  }
  const name = person.name ? person.name : 'No tiene nombre'
  console.log({ name, person })

  let opcion = 5  
  let mensaje = 
    opcion === 1 ? 'Opción 1' :
    opcion === 2 ? 'Opción 2' : 
    opcion === 3 ? 'Opción 3' : 
    'Opción no válida'

  console.log({ mensaje })
}