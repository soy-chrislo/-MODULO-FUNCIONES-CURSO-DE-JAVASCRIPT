// for (const element of elements){

// }
// for (int i = 0; i < array.length; i++) {

// }
export function filterModule (): void {
  /*
  var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])

  * currentValue: El elemento actual que se está procesando en el array.
  * index: El índice del elemento actual que se está procesando en el array.
  * array: El array sobre el que se llama filter().

  * thisArg: Opcional. Valor para usar como this cuando se ejecute callback.

  ! Notas
  * filter() debe retornar siempre un valor booleano, que indica si el elemento actual cumple con el criterio de filtrado definido o no.
  */
  const array = [1, 2, 3, 4, 5]
  const arrayObjects = [
    { name: 'Juan' }, { name: 'Pedro' }, { name: 'Maria' }, { pokemon: 'Pikachu' }, { name: 2 }
  ]

  const result = arrayObjects.filter((currentValue) => {
    console.log(currentValue)
    if (!('name' in currentValue)) {
      return false
    }
    if (!(typeof currentValue.name === 'string')) {
      return false
    }
    return true
  })
  console.log(result)

  console.log(Array.prototype.filter.call(array, (element) => true))
}

export function filterPractice (): void {
  const products = ['ipods', 'iphone', 'imac', 'sony ericson', 'huawei mate', 'samsung galaxy a52s']
  const appleProducts = products.filter((products) => products.split('')[0].toLowerCase() === 'i')
  console.log(appleProducts)

  const people = [
    {
      name: 'Juan',
      age: 20
    },
    {
      name: 'Pedro',
      age: 30
    },
    {
      name: 'Laura',
      age: 40
    },
    {
      name: 'Maria',
      age: 15
    }
  ]
  const adults = Array.prototype.filter.call(people, (person: any) => person.age >= 18)
  console.log(adults)

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
  const evenNumbers = numbers.filter((number) => number % 2 === 0)
  console.log(evenNumbers)
}
