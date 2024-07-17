/*
 * El operador permite:
 * Permite acceder a propiedades anidadas de un objeto sin tener que verificar explícitamente si cada referencia en la cadena es válida
 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
/*
obj.val?.prop
obj.val?.[expr]
obj.func?.(args)
*/

export function optionalChaining() {
	const objeto = {
		name: "chris",
		skills: [
			{
				name: "programming",
				level: 69,
			},
		],
		report: () => "report",
	};

	// Tratar acceder a una propiedad (no un objeto)
	console.log(objeto.name, objeto.born);

	// Forma segura de comprobar
	try {
		const age = objeto.stats.age;
		console.log(objeto.items[0]);
	} catch (e) {
		console.log(e.message);
	}

	// En acción con casos simples
	console.log(objeto.name, objeto.stats?.age);
	console.log(objeto.name, objeto.moves?.stepForward());
	console.log(objeto.name, objeto.stepForward?.());

	// Con funciones.
	const value = objeto.report?.();
	console.log({ value });

	// Con arreglos
	const firstSkill = objeto.skills?.[0]?.name;
	const secondSkill = objeto.skills?.[1]?.name;
	console.log({ firstSkill, secondSkill });
}
