const btn = document.getElementById("btn")! as HTMLButtonElement; // ! - Non-Null Assertion
const input = document.querySelector("#todo-input")! as HTMLInputElement;
const form = document.querySelector("#todo-form")! as HTMLFormElement;
const list = document.querySelector("#todo-list")!;

interface Todo {
	text: string;
	completed: boolean;
}

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

const getTodos = (): Todo[] => {
	const todosJSON = localStorage.getItem("todos");
	if (todosJSON === null) return [];
	return JSON.parse(todosJSON);
};

const initTodo = () => {
	const todos: Todo[] = getTodos();
	todos.forEach((todo) => {
		createTodo(todo);
	});
};

const handleSubmit = (e: SubmitEvent) => {
	e.preventDefault();
	const newTodo: Todo = {
		text: input.value,
		completed: false,
	};
	createTodo(newTodo);
	todos.push(newTodo);
	localStorage.setItem("todos", JSON.stringify(todos));
	input.value = "";
};

const createTodo = (todo: Todo) => {
	const newLi = document.createElement("li");
	newLi.append(todo.text);
	list.appendChild(newLi);
	const checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	newLi.append(checkBox);
};

form.addEventListener("submit", handleSubmit);
document.addEventListener("DOMContentLoaded", initTodo);
