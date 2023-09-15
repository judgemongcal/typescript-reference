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