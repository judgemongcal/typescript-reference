const btn = document.getElementById("btn")! as HTMLButtonElement; // ! - Non-Null Assertion
const input = document.querySelector("#todo-input")! as HTMLInputElement;
const form = document.querySelector("#todo-form")! as HTMLFormElement;
const list = document.querySelector("#todo-list")!;

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

const handleSubmit = (e: SubmitEvent) => {
	e.preventDefault();
	const newTodoText = input.value;
	const newLi = document.createElement("li");
	newLi.append(newTodoText);
	list.appendChild(newLi);
	const checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	newLi.append(checkBox);
	input.value = "";
};

form.addEventListener("submit", handleSubmit);
