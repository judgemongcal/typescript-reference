// Part 1
let highScore : number | boolean;

// Part 2
const stuffs : number[] | string[] = [];

// Part 3
type skillLevel = 'Beginner' | 'Intermediate' | 'Advnaced' | 'Expert'

// Part 4

type SkiSchoolStudent = {
    name:string,
    age:number,
    sport: 'ski' | 'snowboard',
    level: skillLevel
};

// Part 5
type RGB = {
    r: number,
    g: number,
    b: number
}

type HSL = {
    h: number,
    s: number,
    l: number
}

const colors : (RGB|HSL)[] = [];

// Part 6
const greet = (name: string | string[]) => {
    if(typeof name === 'string') {
        console.log(`Hello, ${name}`);
    } else {
        name.forEach((n) => {
            console.log(`Hello, ${name}.`);
        })
    }
}


