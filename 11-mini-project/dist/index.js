"use strict";
const btn = document.getElementById("btn"); // ! - Non-Null Assertion
const input = document.querySelector("#todo-input");
btn.addEventListener("click", function () {
    // alert("Clicked");
    alert(input.value);
    alert(input.value); // Another way for type assertion
    input.value = "";
});
// let mystery: unknown = "Hello World";
// const numChars = (mystery as String).length; // Type Assertion just for this line
// console.log(numChars);
// Type Assertion in DOM
