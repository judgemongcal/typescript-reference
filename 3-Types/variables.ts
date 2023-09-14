let movieTitle : string = 'Oppenheimer';
movieTitle = 'The Godfather';

let myNumber : number = 1124;

let isBoolean : boolean = true;


let showTitle = 'Suits'; // Type Inference - detects the data type of the first assigned value
showTitle = false; // Won't work since showTitle has an initial value of string

let thing: any = 'hello'; // Takes any data type; defeats the purpose of TS. Can still be useful sometimes
thing = 1;
thing = false;


// Delayed Initialization - one of many use-cases where type annotation is useful
const movies = ['Equalizer', 'The Godfather', 'Oppenheimer'];

let foundMovie : string;

for(let movie of movies){
    if(movie === 'The Godfather'){
        foundMovie = 'The Godfather';
    }
}

