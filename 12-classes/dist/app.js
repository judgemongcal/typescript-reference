"use strict";
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
    // Parameters properties shorthand
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this._score = 0; // protected can be accessed any child classes
        this.numLives = 0;
        this.isPrivate = true; // Can't be called outside the class
    }
    secretMethod() {
        console.log("Secret Method");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set fullName(name) {
        const [first, last] = name.split(" ");
        this.first = first;
        this.last = last;
    }
    get score() {
        return this._score;
    }
    set score(scr) {
        if (scr < 0) {
            throw new Error("Score cannot be negative!");
        }
        this._score = scr;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
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
class Bike {
    constructor(color) {
        this.color = color;
        //should follow 'color:string' params from Colorful interface
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        // this method should exist within Jacket class since it impelements Printable interface
        console.log("Jacket printed");
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Uniqlo", "Gray");
// Abstract Classes
class Employee {
    // abstract -> cannot make a new instance of the class. Used to define patterns & methods to be implemented by child classes
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello!");
    }
}
class FulltimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class ParttimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const fullTime = new FulltimeEmployee("John", "Stewart", 100000);
const partTime = new ParttimeEmployee("Bobby", "Brown", 90, 120);
console.log(fullTime, fullTime.getPay());
console.log(partTime, partTime.getPay());
