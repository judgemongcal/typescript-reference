"use strict";
class Player {
    constructor(first, last) {
        this.score = 0;
        this.numLives = 0;
        this.isPrivate = true; // Can't be called outside the class
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("Secret Method");
    }
}
const elton = new Player("Elton", "Cooper");
console.log(elton);
