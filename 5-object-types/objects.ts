const printName = (person: { first: string; last: string }): void => {
    console.log(`${person.first} ${person.last}`);
};

// printName({first:"Elton", last:"John"});
// printName({first:"Elton"}); // Missing argument
// printName({first: 23, last:'Doe'}); // Incorrect data type

let coordinate: { x: number; y: number } = { x: 34, y: 72 }; // Valid

function randomCoords(): { x: number; y: number } {
    // Valid; for multiple return values
    return { x: Math.random(), y: Math.random() * 2 };
}

// Order of arguments passed can be not in the same order as defined in the function params

// Excess Properties
// printName({first: 'John', last: 'Doe', age: 41}); // Inline: Will have error since age is not defined in the function params

const singer = { first: 'John', last: 'Doe', age: 41 };

printName(singer); // Will work but TS will just get the needed arguments for the function's params and just neglect the other args.

// Type Alias - useful for objects

type Course = {
    name: string;
    instructor: string;
    duration: number;
};

const checkCourse = (entry: Course) => {
    //Used reference type named Course
    return `The course is called ${entry.name}, and it is taught by ${entry.instructor}. It is ${entry.duration} hours long`;
};

checkCourse({
    name: 'TypeScript 2023',
    duration: 10,
    instructor: 'Colt Steele',
});

// Nested Object Type Annotation

type Song = {
    title: string;
    artists: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string;
    };
};

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} is produced by ${song.credits.producer} and written by ${song.credits.writer}. 
    It currently has ${song.numStreams} streams`);
}

const mySong: Song = {
    title: 'Unchained Melody',
    artists: 'Righteous Brothers',
    numStreams: 1232441,
    credits: {
        producer: 'Phil Spector',
        writer: 'ALex North',
    },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

// Optional Properties

type Point = {
    x: number;
    y: number;
    z?: number;
};

const myPoint: Point = { x: 1, y: 3, z: 5 };
const myPoint2: Point = { x: 1, y: 3 }; // Still valid since z is declared as optional

// Readonly Modifier

type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 42,
    username: 'username',
};

console.log(user.id);
// user.id = 23; // Will not work since user.id is declared as readonly

// Intersection Types

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful; // Intersects multiple types

const happyFace: ColorfulCircle = {
    radius: 4,
    color: 'Orange',
};

type Cat = {
    numLives: number;
};

type Dog = {
    breed: String;
};

type CatDog = Cat & Dog & { age: number };

const thomas: CatDog = {
    numLives: 4,
    breed: 'Golden Retriever',
    age: 10,
};
