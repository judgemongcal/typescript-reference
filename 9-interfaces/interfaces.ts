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
