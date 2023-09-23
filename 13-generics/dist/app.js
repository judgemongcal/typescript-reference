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
