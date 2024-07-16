export function suma(
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
