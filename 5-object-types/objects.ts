const printName = (person: {first : string, last: string}) : void => {
    console.log(`${person.first} ${person.last}`);
};

printName({first:"Elton", last:"John"});
printName({first:"Elton"}); // Missing argument
printName({first: 23, last:'Doe'}); // Incorrect data type

let coordinate: {x:number, y:number} = {x:34, y:72}; // Valid

function randomCoords () : {x:number, y:number} { // Valid; for multiple return values
    return {x: Math.random(), y: Math.random() * 2};
}

// Order of arguments passed can be not in the same order as defined in the function params



// Excess Properties
printName({first: 'John', last: 'Doe', age: 41}); // Inline: Will have error since age is not defined in the function params

const singer = {first: 'John', last: 'Doe', age: 41};

printName(singer); // Will work but TS will just get the needed arguments for the function's params and just neglect the other args.





// Type Alias - useful for objects

type Course = {
    name: string,
    instructor: string,
    duration: number
};

const checkCourse = (entry : Course) => { //Used reference type named Course
    return `The course is called ${entry.name}, and it is taught by ${entry.instructor}. It is ${entry.duration} hours long`;
}

checkCourse({name: 'TypeScript 2023', duration: 10, instructor: 'Colt Steele'});