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
