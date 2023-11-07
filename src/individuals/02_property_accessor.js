/*
* Empleado para acceder a propiedades de objetos.
  * El lenguaje brinda dos formas de conseguir esto:
    * Notación de puntos: obj.prop -> Acceder de forma estática.
    * Notación de corchetes (brackets): obj['prop'] -> Acceder de forma dinámica o nombrar propiedades con caracteres especiales.
  * Ambas notaciones permiten acceder a la propiedad de forma directa de un objeto.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
export default function propertyAccessor() {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  console.log({ obj})

  const obj2 = {};
  obj2.a = 1;
  obj2.b = 2;
  obj2.c = 3;
  console.log({ obj2 })

  const obj3 = {};
  obj3['a'] = 1;
  obj3['b'] = 2;
  obj3['c'] = 3;
  console.log({ obj3 })

  /* 
  let obj4;
  obj4.a = 1; -> TypeError: Cannot set property 'a' of undefined
  obj4.b = 2;
  obj4.c = 3;
  console.log({ obj4 })
  */

  let obj4 = {};
  // obj4.1 = 'a'; --> SyntaxError: Unexpected number
  obj4['1'] = 'a';
  obj4['['] = 'b';
  obj4[')'] = 'c';
  obj4['-'] = 'd';
  obj4['a'] = 'e';
  console.log({ obj4 })

  // ! PRÁCTICA

  const obj5 = {}
  obj5.func1 = () => { console.log('func1') }
  
  obj5.func1()
  obj5['func1']()

  console.log({ obj5 })


  // ? Estático vs Dinámico 
  const obj6 = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
  }

  for (let i = 1; i <= 5; i++) {
    console.log(obj6[i])
    // console.log(obj6.i) --> undefined
  }
  
}