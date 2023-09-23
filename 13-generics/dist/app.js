"use strict";
const nums = [];
const num2 = [];
const colors = [];
const userName = document.querySelector("#username");
console.log(userName);
userName.value = "Hacked";
const btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// function identity(item: any): any{
//     return item;
// }
function identity(item) {
    return item;
}
identity("string");
identity(34);
function getRandomElement(list) {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}
console.log(getRandomElement([5, 6, 7, 8]));
console.log(getRandomElement(["blue", "red", "orange", "green"]));
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const combo = merge({ name: "colt" }, { pets: ["elton", "blue"] });
const combo2 = merge({ name: "steven" }, { num: 9 });
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("4242424");
function makeEmptyList() {
    //default type for params
    return [];
}
const strings = makeEmptyList();
const bools = makeEmptyList();
class VideoPlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new VideoPlayList();
const video = new VideoPlayList();
const vid = { title: "werwt", creator: "wrwrwr", resolution: "rwrwrw" };
video.add(vid);
// Type Narrowing
function triple(val) {
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
}
else {
    el; // el now becomes a null type
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    console.log("Not a string!");
};
// Equality Narrowing
function someDemo(x, y) {
    if (x === y) {
        console.log("Strings");
    }
    console.log(x, y);
}
someDemo("hello", "world");
someDemo(333, true);
someDemo(4, "four");
function getRuntime(show) {
    if ("numEpisodes" in show) {
        return show.numEpisodes * show.episodeDuration;
    }
    return show.duration;
}
console.log(getRuntime({ title: "Amadeus", duration: 180 }));
console.log(getRuntime({ title: "Suits", numEpisodes: 108, episodeDuration: 60 }));
// Instanceof Type Narrowing
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString);
    }
    else {
        let newDate = new Date(date).toUTCString();
        console.log(newDate);
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        console.log("You are a user");
    }
    else {
        console.log("You are a company");
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return "Meow";
    }
    return "woof";
}
