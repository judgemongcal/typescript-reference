const age = (age: number | string) => {
    return `Your age is ${age}.`;
};

console.log(age(20));
console.log(age('20'));

let age2 : number | string = 23;
age2 = '23';