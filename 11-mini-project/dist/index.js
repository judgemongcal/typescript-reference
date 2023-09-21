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
const readTodos = () => {
    const todoJSON = localStorage.getItem("todos");
    if (todoJSON === null)
        return [];
    return JSON.parse(todoJSON);
};
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
let todos = readTodos();
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
};
const createTodo = (todo) => {
    const newLi = document.createElement("li");
    newLi.append(todo.text);
    list.appendChild(newLi);
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", function () {
        todo.completed = checkBox.checked;
        saveTodos();
    });
    newLi.append(checkBox);
};
const loadFromDB = () => {
    todos.forEach((todo) => {
        createTodo(todo);
    });
};
form.addEventListener("submit", handleSubmit);
document.addEventListener("DOMContentLoaded", loadFromDB);
