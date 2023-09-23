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

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
	return {
		...obj1,
		...obj2,
	};
}

const combo = merge({ name: "colt" }, { pets: ["elton", "blue"] });
const combo2 = merge({ name: "steven" }, { num: 9 });

interface Lengthy {
	length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
	return thing.length * 2;
}

printDoubleLength("4242424");

function makeEmptyList<T = number>(): T[] {
	//default type for params
	return [];
}

const strings = makeEmptyList();
const bools = makeEmptyList<boolean>();

interface Song {
	title: string;
	artist: string;
}

interface Video {
	title: string;
	creator: string;
	resolution: string;
}

class VideoPlayList<T> {
	public queue: T[] = [];

	add(el: T) {
		this.queue.push(el);
	}
}

const songs = new VideoPlayList<Song>();
