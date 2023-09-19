// Interfaces

interface Point {
	x: number;
	y: number;
}

const pt: Point = { x: 445, y: 5535 };

interface Person {
	readonly id: number;
	first: string;
	last: string;
	nickname?: string;
	// sayHi: () => string; Another way to write a method
	sayHi(): string;
}

const tom: Person = {
	id: 1,
	first: "tom",
	last: "doe",
	sayHi: () => {
		return `Hi, ${tom.first}`;
	},
};
const thom: Person = {
	id: 2,
	first: "thom",
	last: "doe",
	nickname: "Thomas",
	sayHi: () => {
		return `Hi, ${thom.first}`;
	},
};

thom.first = "joe";

// Interface Method Parameters

interface Product {
	name: string;
	price: number;
	applyDiscount(
		discount: number,
	): number;
}

const shoes: Product = {
	name: "blue",
	price: 100,
	applyDiscount(amount: number) {
		const newPrice =
			this.price * (1 - amount);
		return newPrice;
	},
};

console.log(shoes.applyDiscount(0.5));

// Reopening Interfaces

interface Dog {
	name: string;
	age: number;
}

interface Dog {
	breed: string;
	bark(): string;
}

const elton: Dog = {
	name: "Elton",
	age: 0.5,
	breed: "Golden Retriever",
	bark() {
		return "woof";
	},
};

// Extending Interfaces - not limited to single inheritance

interface ServiceDog extends Dog {
	job:
		| "drug sniffer"
		| "bomb"
		| "guide";
}

const olive: ServiceDog = {
	name: "olive",
	age: 5,
	breed: "shih tzu",
	bark() {
		return "woof woof";
	},
	job: "guide",
};

// Interface Multi Inheritance

interface Person {
	name: string;
}

interface Employee extends Person {
	readonly id: number;
	email: string;
}

interface Engineer
	extends Person,
		Employee {
	position: string;
	level: string;
	languages: string[];
}


const harold : Engineer = {name:'Harold',id:4554,email:'harold@gmail.com', position:'Software Engineer',level:'Tech Lead', languages: ['JavaScript', 'Rust', 'GoLang']}
