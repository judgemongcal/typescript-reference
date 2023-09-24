import type { Person } from "./types.js";
// 'type' makes it guaranteed that it is removed from JS when compiled.
// Still, you can import a type without the 'type' syntax but might ran into issues when using different transpilers.
export default class User implements Person {
	constructor(public username: string, public email: string) {}

	logout() {
		console.log(`${this.username} is now logged out.`);
	}
}

export function userHelper() {
	console.log("User HElper");
}
