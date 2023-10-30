// for (const element of elements){

// }
// for (int i = 0; i < array.length; i++) {

// }

/*
! FUNCIONES PARECIDAS:
* filter
* includes
* some
*/
export function findModule (): void {
  // var result = arr.find(callback(element[, index[, array]])[, thisArg])
  /*
  * element: El elemento actual que se está procesando en el array.
  * index: El índice del elemento actual que se está procesando en el array.
  * array: El array sobre el que se llama filter().

  * thisArg: Opcional. Valor para usar como this cuando se ejecute callback.

  ! Notas
  * Retorna el primer elemento de un arreglo que cumpla con la condición dada. Si es findIndex, retorna el índice.
  * Soporta contexto siempre y cuando se le pase un thisArg, y se asigne "use strict".
  */
  const array = [1, 2, 3, 4, 5]

  const result = array.find((currentValue) => currentValue > 3)

  console.log(result)
}

export function findPractice (): void {
  const inventario = [
    { nombre: 'manzanas', cantidad: 2 },
    { nombre: 'bananas', cantidad: 0 },
    { nombre: 'cerezas', cantidad: 5 }
  ]

  const cerezas = inventario.findIndex((fruta) => fruta.nombre === 'cerezass')

  // const hayCerezas = cerezas !== undefined
  const hayCerezas = cerezas !== -1

  console.log(cerezas, hayCerezas)
}
