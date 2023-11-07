/*
* Empleado para inicializar una variable: var, let, const.
  * Aplica para campos de clase.
  ! Para todos los tipos de datos.
* Empleado para realizar desestructuración de objetos y arreglos.
* Empleado para asignar parámetros por defecto a funciones.
*/

/*
! Posible errores:
* SyntaxError: Invalid left-hand side in assignment
  - Se produce cuando se intenta asignar un valor a algo que no puede ser asignado.
  - Ejemplo: 1 = 0
* ReferenceError: z is not defined
  - Se produce cuando se intenta asignar un valor a algo que no existe.
  - Ejemplo: z = 0
* ReferenceError: Cannot access 'a' before initialization
  - Se produce cuando se intenta acceder a una variable antes de inicializarla.
  - Ejemplo: a = 0 ; let a = 0
* SyntaxError: Identifier 'a' has already been declared
  - Se produce cuando se intenta redeclarar una variable.
  - Ejemplo: let a = 0; let a = '1'
*/

/*
! Comportamiento:
* Todas las asignaciones se realizan de derecha a izquierda.
* Desestructurar permite "redeclarar" variables en el mismo scope.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment

export default function assignment() {
  // 1 = 0; --> SyntaxError: Invalid left-hand side in assignment
  // z = 0; --> ReferenceError: z is not defined
  // a = 0; --> ReferenceError: Cannot access 'a' before initialization
  /*
  let a = 0;

  let a = '1'; --> SyntaxError: Identifier 'a' has already been declared
  */

  // * Crear variables.
  var a = 1;
  console.log(a)
  // console.log(var u = 1); --> SyntaxError: Unexpected token 'var'

  // * Desestructurar objetos.
  var obj = { a: 3, b: 2 };
  var { a } = obj; // -> a = obj.a;
  // -> var a = obj.a;
  console.log(a)
  
  // * Desestructurar arreglos.
  var arr = [1, 2, 3].reverse();
  var [a, b] = arr; // -> a = arr[0]; b = arr[1];
  // -> var a = arr[0];
  console.log(a, b)

  // * Asignar parámetros por defecto.
  function foo(a = 48) {
    console.log(a)
  }
  foo()

  // ! Práctica

  // * Compartir valores.

  const functionVar = function() {
    console.log('functionVar')
  }
  const functionAsignment = functionVar
  functionAsignment()

  // * Asignación múltiple.
  let x = 2, y = 3, z = 4;
  const var3 = y = z = x;
  console.log({ var3, x, y, z })

  // * Asignación dentro de operaciones.
  console.log(x = 1 + 1)
  console.log({ x : 1 + 1 })
}