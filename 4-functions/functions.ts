function square(num : number){
    return num * num;
}

square('hello');

const sayHello = (name : string) => {
    console.log(`Hello, ${name}`);
}

sayHello('John');
sayHello(24);
sayHello();

const doSomething = (person : string, age : number, isFunny : boolean) => {
};

doSomething('John', 35, false);
doSomething('John', 35, 'Yes');
doSomething('John', 35, true, 45);



// Default Parameters

const sayHi = (name : string = 'stranger') => {
    console.log(`Hi, ${name}`);
};

sayHi();

// Return Type Annotations 

const addNums = (x: number, y: number): number => {
    return x * y;
};


// Anonymous Function Contextual Typing

const colors = ['red' ,'blue', 'yellow'];
colors.map(color => {
    return color.toUpperCase();
    return color.toFixed(); // Won't work since colors is initially declared as an string array. TS takes the type of the variable being used in map
});

// Void Type = for functions with undefined return values
function printTwice(message : string): void {
    console.log(message);
    console.log(message);
};


// Never Type = function should never have a chance to return anything

function makeError(msg : string) : never{
    throw new Error(msg);
}

function gameLoop () : never{
    while(true){
        console.log('Game loop');
    }
}