import fsOld from "node:fs";
import fs from "node:fs/promises";
import { bgGreen, bgRed, bgYellow } from "./chalk.js";
import { wait } from "./utils.js";
import { promisify } from "node:util";
import { exit } from "node:process";

console.time(bgYellow("Tiempo total"));

await ejemploTres();

console.timeEnd(bgYellow("Tiempo total"));

function ejemploUnoCallback() {
	fsOld.readFile("/home/chrislo/.zshrc", "utf-8", (err, data) => {
		if (err) {
			throw err;
		}
		console.log("hola 1");
		console.log(data);
	});
	console.log("hola 2");
}

function ejemploUnoPromesaThen() {
	fs.readFile("/home/chrislo/.zshrca", "utf-8")
		.then((data) => {
			console.log(data);
		})
		.catch((err) => console.log("ups ", err.message))
		.finally(() => {
			console.log("instrucción por si las moscas");
		});
}

async function ejemploUnoPromesaAwait() {
	try {
		const content = await fs.readFile("/home/chrislo/.zshrca", "utf-8");

		console.log(content);
	} catch (err) {
		console.log("ups ", err.message);
	} finally {
		console.log("operaciones adicionales");
	}
}

async function ejemploDos() {
	console.time(bgYellow("Promesa 1"));

	await new Promise((resolve) => {
		console.log(bgGreen("Hora de inicio", new Date().toISOString()));

		setTimeout(() => {
			console.log("Hello, world 1!");
			resolve(null);
			console.log(bgRed("Hora de fin", new Date().toISOString()));
		}, 5000);
	});

	console.timeEnd(bgYellow("Promesa 1"));

	console.time("Promesa 2");

	await new Promise((resolve) => {
		console.log(bgGreen("Hora de inicio", new Date().toISOString()));

		setTimeout(() => {
			console.log("Hello, world 2!");
			resolve(null);
			console.log(bgRed("Hora de fin", new Date().toISOString()));
		}, 10000);
	});

	console.timeEnd("Promesa 2");
}

async function ejemploTres() {
	console.time(bgYellow("SetTimout"));
	setTimeout(() => {
		console.log(bgGreen("Hola"));
	}, 1000);

	setTimeout(async () => {
		await wait(2);
		console.log(bgGreen("Adiós"));
		console.timeEnd(bgYellow("SetTimout"));
	}, 2000);
}

function suma(
	a: number,
	b: number,
	callback: (error: Error | null, result: number) => void,
) {
	setTimeout(() => {
		const result = a + b;

		if (!Number.isInteger(a) || !Number.isInteger(b)) {
			const error = new Error("El parámetro A o B no es un numéro");
			callback(error, result);
			return;
		}

		callback(null, result);
	}, 2000);
}

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
	console.log(await sumaNativaAsync(1, 2));
} catch (err) {
	console.log("ups, que ha pasado?", err.message);
} finally {
	console.log("apagando el programa");
}

// * Asincrona con then()/catch() -> No detiene el flujo de ejecución

sumaAsync(1, 2)
	.then((result) => {
		console.log(result + 10);
	})
	.catch((err) => {
		console.log("ups, que ha pasado?", err.message);
	})
	.finally(() => {
		console.log("apagando el programa");
	});

// * Asincrona con callback -> No detiene el flujo de ejecución

suma(1, "2" as unknown as number, (error, result) => {
	if (error) {
		console.log("que paso?", error.message);
	} else {
		console.log({ result });
	}
});
