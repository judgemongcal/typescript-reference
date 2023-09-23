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
const video = new VideoPlayList<Video>();

const vid: Video = { title: "werwt", creator: "wrwrwr", resolution: "rwrwrw" };
video.add(vid);

// Type Narrowing

function triple(val: number | string) {
	if (typeof val === "string") {
		// works with primitive types
		return val.repeat(3);
	}
	return val * 3;
}

// Truthiness Guard

const el = document.getElementById("idk");
if (el) {
	el; // el now becomes an HTMLElement type
} else {
	el; // el now becomes a null type
}

const printLetters = (word: string | null) => {
	if (word) {
		for (let char of word) {
			console.log(char);
		}
	}

	console.log("Not a string!");
};

// Equality Narrowing

function someDemo(x: string | number, y: string | boolean) {
	if (x === y) {
		console.log("Strings");
	}
	console.log(x, y);
}

someDemo("hello", "world");
someDemo(333, true);
someDemo(4, "four");

// Narrowing with In Operator

interface Movie {
	title: string;
	duration: number;
}

interface TVShow {
	title: string;
	numEpisodes: number;
	episodeDuration: number;
}

function getRuntime(show: Movie | TVShow) {
	if ("numEpisodes" in show) {
		return show.numEpisodes * show.episodeDuration;
	}

	return show.duration;
}

console.log(getRuntime({ title: "Amadeus", duration: 180 }));
console.log(
	getRuntime({ title: "Suits", numEpisodes: 108, episodeDuration: 60 }),
);

// Instanceof Type Narrowing
