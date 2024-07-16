import chalk from "chalk";

export function bgYellow(...text: string[]): string {
	return chalk.bgYellow(text);
}

export function bgGreen(...text: string[]): string {
	return chalk.bgGreen(text);
}

export function bgRed(...text: string[]): string {
	return chalk.bgRed(text);
}
