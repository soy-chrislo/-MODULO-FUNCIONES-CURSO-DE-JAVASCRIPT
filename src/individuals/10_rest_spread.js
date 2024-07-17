/*
 * El operador tiene dos funcionalidades:
 * - Rest: El operador rest (...) agrupa múltiples elementos en una única colección (como un array o un objeto).
 * - Spread: El operador spread (...) expande una colección en sus elementos individuales.
 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
/*
 * Function arguments list (myFunction(a, ...iterableObj, b))
 * Array literals ([1, ...iterableObj, '4', 'five', 6])
 * Object literals ({ ...obj, key: 'value' })
 */
export function restSpread() {
	// * REST en funciones

	function sum(...numbers) {
		console.log(numbers);
		return numbers.reduce((acc, number) => acc + number, 0);
	}

	console.log(sum(1, 2, 3, 4)); // 10
	console.log(sum(5, 10, 15)); // 30

	// * SPREAD para copiar arrays

	const originalArray = [1, 2, 3];
	console.log(originalArray);
	const newArray = [...originalArray, 4, 5];

	console.log(newArray); // [1, 2, 3, 4, 5]

	// * SPREAD para combinar arrays

	const array1 = [1, 2, 3];
	const array2 = [4, 5, 6];
	const arrayCopy = [...array1];
	console.log({ arrayCopy });
	const combinedArray = [...array1, ...array2];

	console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

	// * REST para desestructurar objetos

	const person = {
		name: "Chris",
		age: 99,
		country: "Colombia",
	};

	const { name, ...rest } = person;

	console.log(name); // 'Chris'
	console.log(rest); // { age: 99, country: 'Colombia' }

	// * REST para clonar objetos

	const originalObject = { name: "Alice", age: 25 };
	const clonedObject = { ...originalObject };

	clonedObject.name = "Tertulia";
	clonedObject.age = 10;

	console.log({ originalObject }); // { name: 'Alice', age: 25, city: 'Los Angeles' }
	console.log({ clonedObject });
}
