export function suma(
	a: number,
	b: number,
	callback: (error: Error | null, result: number | null) => void,
) {
	setTimeout(() => {
		if (!Number.isInteger(a) || !Number.isInteger(b)) {
			const error = new Error("El parámetro A o B no es un numéro");
			callback(error, null);
			return;
		}

		const result = a + b;

		callback(null, result);
	}, 2000);
}
