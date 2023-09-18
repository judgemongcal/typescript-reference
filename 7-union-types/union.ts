const age = (age: number | string) => {
    return `Your age is ${age}.`;
};

console.log(age(20));
console.log(age('20'));

let age2 : number | string = 23;
age2 = '23';

type Point = {
    x: number,
    y: number
};

type Loc = {
    lat: number,
    long: number
};

let coordinates : Point | Loc = {x: 23, y: 42};
coordinates = {lat: 243, long: 421};

// Type Narrowing with Union Types

function calcTax(price: number | string, tax: number) : number {
    // return price * tax;
    // price.replace("$","")
    if(typeof price === 'string') {
        // price.replace('$','');
        price = parseFloat(price.replace('$',''));
    } 
        return price * tax;
    
}
    

   
