/* eslint-disable no-sparse-arrays */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
export function forEachModule (): void {
  /*
arr.forEach(function callback(currentValue, index, array) {
    "use strict"
    your iterator
}[, thisArg]);

* currentValue: El elemento actual que se está procesando en el array.
* index: El índice del elemento actual que se está procesando en el array.
* array: El array sobre el que se llama forEach().

* thisArg: Opcional. Valor para usar como this cuando se ejecute callback.

! Notas
* No tiene un valor de retorno. (undefined) y tampoco se encadenan por cada iteración.
* No modifica el array original, a menos que se modifique el array original dentro de la función callback.
* No se puede detener o cortar el bucle forEach, a menos que se lance una excepción.
* Para utilizar thisArg, el código debe ejecutarse en modo estricto. De lo contrario, se utilizará el objeto global como thisArg.
* Se puede utilizar return para saltar una iteración, continue y break no funcionan.
*/
  interface Context {
    value: string
    saludar: () => void
  }

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const objeto: Context = { value: 'valor cualquiera', saludar: () => { console.log('saludando') } }

  // ! Con Typescript
  const valor = array.forEach(function (value, index, array) {
    console.log(value, index, array)
    if (index === 5) {
      console.log('Haciendo return')
      return
    }
    (this as Context).saludar()
    console.log((this as Context).value)
  }, objeto)

  console.log({ valor })

  // ! Con Javascript
  array.forEach(function (value, index, array: any) {
    'use strict'
    console.log(value, index, array)
    if (index === 5) {
      console.log('El indice es 5')
      array.push('Guanabana')
      console.log(array)
    }
    console.log(this.value)
  }, objeto)

  console.log('El estado final del array es', { array })

  // * Las funciones flecha no toman el this del contexto en el que se encuentran, sino que toman el this del contexto en el que fueron creadas, ósea el this del contexto global
  //   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  //   array.forEach((value, index, array) => {
  //     console.log(value, index, array)
  //     console.log(this.saludar())
  //   }, { value: 'valor cualquiera', saludar: () => { console.log('saludando') } })
}
// for (const element of elements){

// }
// for (int i = 0; i < array.length; i++) {

// }
export function forEachPractice (): void {
  const array: any = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const arraySpare = [1, 2, , 4]
  // ! Que se pueda modificar el array, no significa que se DEBA hacer.
  console.log('-> Regla 1: No modificar el array original')
  array.forEach((value: any, index: any) => {
    if (index === 5) {
      array.push('Guanabana')
    }
  })
  console.log({ array })
  // ! No realizar operaciones con arrays sparse
  console.log('-> Regla 2: No realizar operaciones con arrays sparse')
  arraySpare.forEach((value) => {
    console.log(value)
  })
  console.log({ arraySpare })
  // ! No utilizar return, porque no RETORNA valores
  console.log('-> Regla 3: No utilizar return, porque no RETORNA valores')
  const value = array.forEach((value: any, index: any) => {
    if (index === 5) {
      return value
    }
    console.log(value)
  })
  console.log({ value })
  // ! No se puede cortar o detener el bucle, a menos que se lance una excepción
  console.log('-> Regla 4: No se puede cortar el bucle, a menos que se lance una excepción')
  try {
    array.forEach((value: any, index: any) => {
      if (index === 5) {
        // throw new Error(`El favor del índice 5 es ${value}`)
      }
      console.log(value)
    })
  } catch (error) {
    console.log(error)
  }

  // ! No realizar operaciones asíncronas
  console.log('-> Regla 5: No realizar operaciones asíncronas')
  array.forEach(async (value: any, index: any) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hola amigo, estas mal, pide ayuda')
      }, 2000)
    })
    console.log((await promise))
  })
}
