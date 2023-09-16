var printName = function (person) {
    console.log("".concat(person.first, " ").concat(person.last));
};
// printName({first:"Elton", last:"John"});
// printName({first:"Elton"}); // Missing argument
// printName({first: 23, last:'Doe'}); // Incorrect data type
var coordinate = { x: 34, y: 72 }; // Valid
function randomCoords() {
    return { x: Math.random(), y: Math.random() * 2 };
}
// Order of arguments passed can be not in the same order as defined in the function params
// Excess Properties
// printName({first: 'John', last: 'Doe', age: 41}); // Inline: Will have error since age is not defined in the function params
var singer = { first: 'John', last: 'Doe', age: 41 };
printName(singer); // Will work but TS will just get the needed arguments for the function's params and just neglect the other args.
var checkCourse = function (entry) {
    return "The course is called ".concat(entry.name, ", and it is taught by ").concat(entry.instructor, ". It is ").concat(entry.duration, " hours long");
};
checkCourse({ name: 'TypeScript 2023', duration: 10, instructor: 'Colt Steele' });
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " is produced by ").concat(song.credits.producer, " and written by ").concat(song.credits.writer, ". \n    It currently has ").concat(song.numStreams, " streams"));
}
var mySong = {
    title: 'Unchained Melody',
    artists: 'Righteous Brothers',
    numStreams: 1232441,
    credits: {
        producer: 'Phil Spector',
        writer: 'ALex North'
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
