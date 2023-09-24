import axios from "axios";
import _ from "lodash";

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: { lat: string; lng: string };
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

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

axios
	.get<User[]>("https://jsonplaceholder.typicode.com/users")
	.then((res) => {
		console.log("Worked");
		res.data.forEach((element) => {
			printUser(element);
		});
	})
	.catch((e) => {
		console.log("Error!", e);
	});

function printUser(user: User) {
	console.log(
		`${user.name} - ${user.id} - ${user.phone} - ${user.company.name} `,
	);
}
