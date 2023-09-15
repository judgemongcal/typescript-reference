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