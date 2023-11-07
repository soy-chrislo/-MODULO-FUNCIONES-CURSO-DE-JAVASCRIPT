// for (const element of elements){

// }
// for (int i = 0; i < array.length; i++) {

// }
export function reduceModule (): void {
  /*
    const any = arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
  */
  /*
    * arr: Array sobre el que se llama reduce.
    * callback: Función que se ejecuta sobre cada elemento del array, recibe cuatro parámetros:
    * acumulador: Valor devuelto en la llamada anterior de la función (o el valorInicial, si se suministró).
    * valorActual: Elemento actual que está siendo procesado en el array.
    * índice: Índice del elemento actual que está siendo procesado en el array.
    * array: Array sobre el que se llama reduce.
    * valorInicial: Objeto a usar como primer argumento de la primera llamada de la función callback.

    ! Notas
    * Reduce permite hacer operaciones sobre un array y devolver un valor cualquiera.
    * El valor retornado en cada iteración (explicita o implicitamente) se almacena en el acumulador.
    * El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
    * El método reduce() recorre el array de izquierda a derecha
        * A diferencia de reduceRight(), que lo hace de derecha a izquierda.
    ! Lo siguiente solo aplica para la primera iteración:
    * Si se suministra valorInicial, éste se establece en acumulador en la primera iteración, y el valorActual toma el valor del primer elemento del array.
    * Si no se suministra valorInicial, el acumulador toma el valor del primer elemento del array, y el valorActual toma el valor del segundo.
    ! Casos especiales:
    * Si el array está vacío y no se suministra valorInicial, se lanza un TypeError.
    * Si el array solo tiene un elemento (sin importar su posición) y no se suministra valorInicial, o se suministra valorInicial pero el array está vacío, el único valor del array será devuelto sin llamar a callback.
  */
  const numeros = [1, 2, 3, 4]
  console.log('Prueba 1: ', numeros.reduce((acumulador, actual): any => acumulador))
  console.log('Prueba 2: ', numeros.reduce((acumulador, valorActual) => { return acumulador }, 0))
  console.log('Prueba 3: ', numeros.reduce((acumulador, valorActual) => { return acumulador }))
  // Spread operator
  console.log(
    'Prueba 4: ',
    numeros.reduce(
      (acc, cur, idx, src): any[any] => [...acc, [cur]],
      []
    )
  )
  console.log('Prueba 5: ', numeros.reduce((acumulador, actual) => {
    return acumulador + actual
  }, 0))
}

export function reducePractice (): void {
  const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 },
    { name: 'Jane', age: 14 },
    { name: 'Juan', age: 58 },
    { name: 'Esteban', age: 28 },
    { name: 'Angela', age: 12 },
    { name: 'Eduardo', age: 82 }
  ]

  const averageAge = people.reduce((acc, cur) => acc + cur.age, 0) / people.length

  console.log('People average age: ', averageAge.toFixed(2))

  const ageTable = people.reduce((acc: any, cur): any => {
    const age: any = cur.age
    if (acc[age] === undefined) {
      acc[age] = [cur.name]
    } else {
      acc[age] = [...acc[age], cur.name]
    }
    return acc
  }, {})
  // ! Se recomienda SIEMPRE especificar el valor inicial del acumulador.
  console.table(ageTable)
  console.log(ageTable)

  const table: any = {}
  const ageTableMap = people.map((person) => {
    const age = person.age
    if (table[age] === undefined) {
      table[age] = 1
    } else {
      table[age]++
    }
    return table
  })
  console.table(ageTableMap)
  console.table(table)
}
