class Player {
	readonly first: string;
	readonly last: string;
	score = 0;
	numLives = 0;
	private isPrivate = true; // Can't be called outside the class

	constructor(first: string, last: string) {
		this.first = first;
		this.last = last;
	}

	private secretMethod(): void {
		console.log("Secret Method");
	}
}

const elton = new Player("Elton", "Cooper");
console.log(elton);
