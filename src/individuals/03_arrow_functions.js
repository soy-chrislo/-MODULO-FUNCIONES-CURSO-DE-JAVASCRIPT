"use strict";
/*
* Técnicamente `=>` no es un operador, sino una sintaxis especial para definir funciones.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
export default function arrowFunction() {
  // => {} -> SyntaxError: Unexpected token '=>'

  () => 1 // -> function() { return 1; } | Similar a 1 o 'hola'
  
  // () => console.log('omg') --> SyntaxError: Malformed arrow function parameter list
  
  ;() => console.log('omg') // -> function() { return console.log('omg'); }
  
  a => 2 // -> function(a) { return 2; }
  
  ;(a) => 3  // -> function(a) { return 3; }
  
  a => { return 4 } // -> function(a) { return 4; }
  
  // ? IIFE: Immediately Invoked Function Expression
  ;(() => console.log('anon 1'))()
  ;(() => console.log('anon 2'))
  
  const a = (func) => func()
  a(() => console.log('anon 3'))
  
}