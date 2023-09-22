class Player {
	static description = "players in the game"; // only exists in Player class, not on all instances of the Player class
	#score = 0; // # -> private
	#numLives = 10; // Class Fields
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}

	getScore() {
		return this.#score;
	}

	get fullName() {
		return `${this.first} ${this.last}`;
	}

	get score() {
		return this.#score;
	}

	set score(newScore) {
		if (newScore < 0) {
			throw new Error("Score cannot be negative!");
		}
		this.#score = newScore;
	}

	set fullName(newName) {
		const [first, last] = newName.split(" ");
		this.first = first;
		this.last = last;
	}

	updateScore(newScore) {
		this.#score = newScore;
	}
	taunt() {
		console.log("BOOYAH");
	}

	loseLife() {
		this.numLives -= 1;
	}
}

class AdminPlayer extends Player {
	constructor(first, last, power) {
		super(first, last);
		this.power = power;
	}
	isAdmin = true;
}

const admin1 = new AdminPlayer("Bill", "Burr", "Restore User");
console.log(admin1);
console.log(admin1.power);

const player1 = new Player("John", "Doe");
console.log(player1);
const player2 = new Player("Roe", "Jogan");
console.log(player2);
player2.updateScore(200);
console.log(player2.getScore());

console.log(player2.fullName);
console.log(player2.score);
player2.score = 2000;
console.log(player2.score);

console.log(player1.fullName);
player1.fullName = "Kevin Smith";
console.log(player1.fullName);
