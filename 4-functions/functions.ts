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