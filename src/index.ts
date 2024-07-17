import { suma } from "./callback.js";
import { bgYellow } from "./chalk.js";
import { callbackExample, promiseThenExample } from "./examples.js";
import "./promise.js";

console.time(bgYellow("Tiempo total"));

// const basicPromise = new Promise<string>((resolve, reject) => {
// 	// resolve("yeah, resolve, congratulations!");
// 	reject(
// 		new Error("ups, look that error", { cause: "gimme more information" }),
// 	);
// });

// basicPromise
// 	.then((result) => {
// 		console.log({ result });
// 	})
// 	.catch((err: Error) => {
// 		console.log(`Lets format this message
// 			${err.message}
// 			${err.cause}`);
// 	});

console.timeEnd(bgYellow("Tiempo total"));

function exampleUsingSuma() {
	console.log("1");
	suma(1, 2 as unknown as number, (error, result) => {
		if (error || result === null) {
			if (error instanceof Error) {
				console.error(error.message);
			}
			return;
		}
		console.log("2");
		console.log({ result: result + 10 });
	});
	console.log("3");
}

/*
1. How create a promise.
2. How to use async/await.
3. then/catch vs async/await.
*/
