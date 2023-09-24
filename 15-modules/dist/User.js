// 'type' makes it guaranteed that it is removed from JS when compiled.
// Still, you can import a type without the 'type' syntax but might ran into issues when using different transpilers.
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} is now logged out.`);
    }
}
export function userHelper() {
    console.log("User HElper");
}
