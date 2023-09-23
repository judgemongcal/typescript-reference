const nums: number[] = [];
const num2: Array<number> = [];
const colors: Array<string> = [];

const userName = document.querySelector<HTMLInputElement>("#username")!;
console.log(userName);
userName.value = "Hacked";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
	return item;
}

function stringIdentity(item: string): string {
	return item;
}

function booleanIdentity(item: boolean): boolean {
	return item;
}

// function identity(item: any): any{
//     return item;
// }

function identity<Type>(item: Type): Type {
	return item;
}

identity<string>("string");
identity<number>(34);

function getRandomElement<T>(list: T[]): T {
	const randIndex = Math.floor(Math.random() * list.length);
	return list[randIndex];
}

console.log(getRandomElement([5, 6, 7, 8]));
console.log(getRandomElement(["blue", "red", "orange", "green"]));
