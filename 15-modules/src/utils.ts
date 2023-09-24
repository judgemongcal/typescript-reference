export function add(x: number, y: number) {
	return x + y;
}

export function sample<T>(arr: T[]): T {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

// If there is no 'exports', TS treats the file as a script, not as a module.
