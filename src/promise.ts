import { promisify } from "node:util";
import { suma } from "./callback.js";

const sumaAsync = promisify(suma);

function sumaNativaAsync(a: number, b: number): Promise<number> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!Number.isInteger(a) || !Number.isInteger(b)) {
				const error = new Error("El parámetro A o B no es un numéro");
				reject(error);
			}

			const result = a + b;
			resolve(result);
		}, 2000);
	});
}

// * Asincrona con async/await -> Detiene el flujo de ejecución

try {
	const result = (await sumaNativaAsync(1, "2" as unknown as number)) + 10;
	console.log(result);
	console.log("just right there");
} catch (err) {
	console.log("ups, que ha pasado?", err.message);
} finally {
	console.log("apagando el programa!!!");
}

// * Asincrona con then()/catch() -> No detiene el flujo de ejecución

sumaAsync(1, 2)
	.then((result) => {
		if (result === null) return;
		console.log({ result });
	})
	.catch((err) => {
		console.log("ups, que ha pasado?", err.message);
	})
	.finally(() => {
		console.log("apagando el programa!!!");
	});

// * Asincrona con callback -> No detiene el flujo de ejecución

// suma(1, "2" as unknown as number, (error, result) => {
// 	if (error) {
// 		console.log("que paso?", error.message);
// 	} else {
// 		console.log({ result });
// 	}
// });
