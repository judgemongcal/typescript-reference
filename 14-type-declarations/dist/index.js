"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios
// 	.get<User>("https://jsonplaceholder.typicode.com/users/3")
// 	.then((res) => {
// 		console.log("Worked");
// 		const { data } = res;
// 		console.log(data);
//         printUser(data);
// 	})
// 	.catch((e) => {
// 		console.log("Error!", e);
// 	});
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    console.log("Worked");
    res.data.forEach((element) => {
        printUser(element);
    });
})
    .catch((e) => {
    console.log("Error!", e);
});
function printUser(user) {
    console.log(`${user.name} - ${user.id} - ${user.phone} - ${user.company.name} `);
}
