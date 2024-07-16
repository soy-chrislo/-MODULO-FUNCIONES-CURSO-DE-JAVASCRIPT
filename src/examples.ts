import fsSync from "node:fs";
import fs from "node:fs/promises";
import { bgGreen, bgRed, bgYellow } from "./chalk.js";
import { wait } from "./utils.js";

// Traditional Way
export function callbackExample() {
	fsSync.readFile("/home/chrislo/.zshrc", "utf-8", (err, data) => {
		if (err) {
			throw err;
		}
		console.log("hola 1");
		console.log(data);
	});
	console.log("hola 2");
}

export function promiseThenExample() {
	fs.readFile("/home/chrislo/.zshrca", "utf-8")
		.then((data) => {
			console.log(data);
		})
		.catch((err) => console.log("ups ", err.message))
		.finally(() => {
			console.log("instrucción por si las moscas");
		});
}

export async function promiseAwaitExample() {
	try {
		const content = await fs.readFile("/home/chrislo/.zshrca", "utf-8");

		console.log(content);
	} catch (err) {
		console.log("ups ", err.message);
	} finally {
		console.log("operaciones adicionales");
	}
}

export async function promiseOrderAwaitExample() {
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

export async function promiseOrderThenExample() {
	console.time(bgYellow("Promesa 1"));

	new Promise((resolve) => {
		console.log(bgGreen("Hora de inicio", new Date().toISOString()));

		setTimeout(() => {
			console.log("Hello, world 1!");
			resolve(null);
			console.log(bgRed("Hora de fin", new Date().toISOString()));
		}, 5000);
	}).then();

	console.timeEnd(bgYellow("Promesa 1"));

	console.time("Promesa 2");

	new Promise((resolve) => {
		console.log(bgGreen("Hora de inicio", new Date().toISOString()));

		setTimeout(() => {
			console.log("Hello, world 2!");
			resolve(null);
			console.log(bgRed("Hora de fin", new Date().toISOString()));
		}, 10000);
	}).then();

	console.timeEnd("Promesa 2");
}

export async function setTimeoutExample() {
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
