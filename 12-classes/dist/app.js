class Player {
	score = 0;
	numLives = 10; // Class Fields
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}
	taunt() {
		console.log("BOOYAH");
	}

	loseLife() {
		this.numLives -= 1;
	}
}

const player1 = new Player("John", "Doe");
console.log(player1);
const player2 = new Player("Roe", "Jogan");
console.log(player2);
console.log(player2.numLives);
player2.numLives -= 2;
console.log(player2.numLives);
