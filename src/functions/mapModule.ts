/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export function mapModule (): void {
/*
var nuevo_array = arr.map(function callback(currentValue, index, array) {
  "use strict"
  your iterator
}[, thisArg])

* currentValue: El elemento actual que se está procesando en el array.
* index: El índice del elemento actual que se está procesando en el array.
* array: El array sobre el que se llama map.

* thisArg: Opcional. Valor para usar como this cuando se ejecute callback.

! Notas
* Realiza una serie de operaciones sobre cada elemento del array original, y devuelve un array nuevo con los resultados.
* No modifica el array original. (Aunque si el callback lo hace)
* No se puede detener o cortar el bucle map, a menos que se lance una excepción.
* RETURN obligatorio, se utiliza para devolver el nuevo valor del elemento.
* CONTINUE y BREAK no funcionan. (Tampoco se deberían usar)

! Posibilidades
* Modificar las propiedades de los objetos.
* Ejecutar una operación a cada elemento de un arreglo.
* Realizar conversiones de los elementos.
* Separar una cadena de texto en un array.
*/

  // for (const element of elements){

  // }
  // for (int i = 0; i < array.length; i++) {

  // }
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const namesArray = ['Juan', 'Pedro', 'Maria', 'Jose', 'Luis', 'Ana', 'Luisa', 'Pablo', 'Jorge']
  let objectArray
  let arrayResult

  arrayResult = array.map(function (value, index, array) {
    // console.log(value, index, array)
    return value * 2
  })

  console.log({ arrayResult })

  arrayResult = array.map(function (value, index) {
    return 'algo'
  })

  console.log({ arrayResult })

  arrayResult = array.map(function (value, index) {
    if (index === 5) {
      return 'Guanabana'
    }
    return value
  })

  console.log({ arrayResult })

  objectArray = namesArray.map(function (value, index) {
    return { name: value, id: index }
  })

  console.log({ objectArray })

  objectArray = namesArray.map(function (value, index) {
    return { value: this.valueObj }
  }, { valueObj: 'valor cualquiera' })

  console.log({ objectArray })

  const objeto = {}
  objectArray = namesArray.map(function (value, index) {
    this[index] = value
    this['año'] = 'hola'
    console.log(this)
    return this
  }, objeto)

  console.log(objeto)
}

export function mapPractice (): void {
//   console.log('1. Realizar una petición HTTP y formatear datos')

  //   void fetch('https://api.example.com/items')
  //     .then(async response => await response.json())
  //     .then(data => {
  //       const transformedData = data.map(item => {
  //         return {
  //           id: item.id,
  //           name: item.name.toUpperCase(),
  //           price: item.price * 1.21 // Aplicar IVA
  //         }
  //       })
  //       console.log(transformedData)
  //     })

  //   console.log('2. Insertar datos en una base de datos')

  //   const users = [
  //     { name: 'John', age: 30 },
  //     { name: 'Jane', age: 25 },
  //     { name: 'Doe', age: 35 }
  //   ]

  //   const queryValues = users.map(user => `('${user.name}', ${user.age})`).join(', ')

  //   const query = `INSERT INTO users (name, age) VALUES ${queryValues}`

  //   console.log(query)
  //   // INSERT INTO users (name, age) VALUES ('John', 30), ('Jane', 25), ('Doe', 35)

  //   console.log('3. Transformar datos de una consulta a base de datos')

  //   db.query('SELECT * FROM users', (error: any, results: any[]) => {
  //     if (error) throw error

  //     const users = results.map(row => {
  //       return {
  //         id: row.id,
  //         fullName: `${row.firstName} ${row.lastName}`,
  //         age: row.age
  //       }
  //     })

  //     console.log(users)
  //   })

  //   console.log('4. Transformar datos para una consulta HTTP')

  //   app.get('/api/users', (req, res) => {
  //     db.query('SELECT * FROM users', (error, results) => {
  //       if (error) return res.status(500).json({ error })

  //       const users = results.map(row => ({
  //         id: row.id,
  //         name: `${row.first_name} ${row.last_name}`,
  //         email: row.email
  //       }))

  //       res.json(users)
  //     })
  //   })

  //   console.log('5. Transformar datos para una respuesta HTTP')
  //   app.post('/api/items', (req, res) => {
  //     const items = req.body.map(item => ({
  //       name: item.name.trim(),
  //       price: parseFloat(item.price)
  //     }))

  //     // Aquí iría el código para insertar los artículos en la base de datos

//     res.status(201).json(items)
//   })
}
