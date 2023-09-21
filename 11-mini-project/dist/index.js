"use strict";
const btn = document.getElementById("btn"); // ! - Non-Null Assertion
const input = document.querySelector("#todo-input");
const form = document.querySelector("#todo-form");
const list = document.querySelector("#todo-list");
// btn.addEventListener("click", function () {
// 	// alert("Clicked");
// 	alert(input.value);
// 	alert((<HTMLInputElement>input).value); // Another way for type assertion
// 	input.value = "";
// });
// let mystery: unknown = "Hello World";
// const numChars = (mystery as String).length; // Type Assertion just for this line
// console.log(numChars);
// Type Assertion in DOM
const getTodos = () => {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
};
const initTodo = () => {
    const todos = getTodos();
    todos.forEach((todo) => {
        createTodo(todo);
    });
};
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
};
const createTodo = (todo) => {
    const newLi = document.createElement("li");
    newLi.append(todo.text);
    list.appendChild(newLi);
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    newLi.append(checkBox);
};
form.addEventListener("submit", handleSubmit);
document.addEventListener("DOMContentLoaded", initTodo);
