// class Player {
// 	readonly first: string;
// 	readonly last: string;
// 	score = 0;
// 	numLives = 0;
// 	private isPrivate = true; // Can't be called outside the class

// 	constructor(first: string, last: string) {
// 		this.first = first;
// 		this.last = last;
// 	}

// 	private secretMethod(): void {
// 		console.log("Secret Method");
// 	}
// }

class Player {
	protected _score = 0; // protected can be accessed any child classes
	numLives = 0;
	private isPrivate = true; // Can't be called outside the class

	// Parameters properties shorthand
	constructor(public first: string, public last: string) {}

	private secretMethod(): void {
		console.log("Secret Method");
	}

	get fullName(): string {
		return `${this.first} ${this.last}`;
	}

	set fullName(name: string) {
		const [first, last] = name.split(" ");
		this.first = first;
		this.last = last;
	}

	get score(): number {
		return this._score;
	}

	set score(scr: number) {
		if (scr < 0) {
			throw new Error("Score cannot be negative!");
		}
		this._score = scr;
	}
}

class SuperPlayer extends Player {
	isAdmin: boolean = true;
	maxScore() {
		this._score = 999999;
	}
}

const elton = new Player("Elton", "Cooper");
console.log(elton);
console.log(elton.first);
console.log(elton.fullName);
elton.fullName = "Cooper Elton";
console.log(elton.fullName);
console.log(elton.score);
elton.score = 12600;
console.log(elton.score);

// Interface DESCRIBES the shape

interface Colorful {
	color: string;
}

interface Printable {
	print(): void;
}

class Bike implements Colorful {
	constructor(public color: string) {
		//should follow 'color:string' params from Colorful interface
	}
}
class Jacket implements Colorful, Printable {
	constructor(public brand: string, public color: string) {}

	print() {
		// this method should exist within Jacket class since it impelements Printable interface
		console.log("Jacket printed");
	}
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Uniqlo", "Gray");

// Abstract Classes

abstract class Employee {
	// abstract -> cannot make a new instance of the class. Used to define patterns & methods to be implemented by child classes
	constructor(public first: string, public last: string) {}

	abstract getPay(): Number;

	greet() {
		console.log("Hello!");
	}
}

class FulltimeEmployee extends Employee {
	constructor(first: string, last: string, private salary: number) {
		super(first, last);
	}

	getPay() {
		return this.salary;
	}
}

class ParttimeEmployee extends Employee {
	constructor(
		first: string,
		last: string,
		public hourlyRate: number,
		public hoursWorked: number,
	) {
		super(first, last);
	}

	getPay(): Number {
		return this.hourlyRate * this.hoursWorked;
	}
}

const fullTime = new FulltimeEmployee("John", "Stewart", 100000);
const partTime = new ParttimeEmployee("Bobby", "Brown", 90, 120);

console.log(fullTime, fullTime.getPay());
console.log(partTime, partTime.getPay());
