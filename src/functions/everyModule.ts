/* eslint-disable @typescript-eslint/no-unused-expressions */
// for (const element of elements){

// }
// for (int i = 0; i < array.length; i++) {

// }

/*
! TODO LO CONTRARIO DE SOME.
*/
export function everyModule (): void {
  // var result = arr.every(callback(element[, index[, array]])[, thisArg])
  /*
    * element: El elemento actual que se está procesando en el array.
    * index: El índice del elemento actual que se está procesando en el array.
    * array: El array sobre el que se llama every().

    * thisArg: Opcional. Valor para usar como this cuando se ejecute callback.

    ! Notas
    * Comprueba que TODOS los elementos del array cumplen con la condición dada, si es así retorna true, sino false.
    * Soporta contexto siempre y cuando se le pase un thisArg, y se asigne "use strict".
    */

  const array = [1, 2, 3, 4, 5, 6]

  console.log('¿Todos los elementos son numeros? ', array.every((currentValue) => typeof currentValue === 'number'))
}

export function everyPractice (): void {
  const trabajadores = [
    {
      nombre: 'Pedro',
      area: 'Administración'
    },
    {
      nombre: 'Juan',
      area: 'Contabilidad'
    },
    {
      nombre: 'Maria',
      area: 'Contabilidad'
    },
    {
      nombre: 'Jorge',
      area: 'Sistemas'
    }
  ]
  // console.log(
  //   '¿Son todos los trabajadores de contabilidad? ',
  //   trabajadores.every(
  //     function (trabajador) { return trabajador.area === this.areas[1] },
  //     { areas: ['Administración', 'Contabilidad'] }
  //   )
  // )

  // console.log(
  //   '¿Todos los objetos en la propiedad "areas" tienen un valor válido? ',
  //   trabajadores.every(function (trabajador) { return this.areas.includes(trabajador.area) }, { areas: ['Administración', 'Contabilidad', 'Sistemas'] })
  // )

  console.log('¿Todos los objetos tienen la propiedad "area"? ', trabajadores.every((trabajador) => trabajador.area !== undefined))
}
