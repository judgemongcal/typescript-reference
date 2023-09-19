const stuff : string[] = ['assf','fsfs','dgdg']; // typical array


let myTuple: [number, string]; // Strict order of params

myTuple = [23, 'fssf'];
// myTuple = ['ssdsds', 23]; Won't work since it doesn't follow the data type of myTuple

const color: [number, number, number] = [255,7,233];

type HTTPResponse = [number, string];

const goodRes : HTTPResponse = [200, 'Okay'];
const badRes : HTTPResponse = [400, 'Not okay'];
// goodRes[0] = '200'; 

goodRes.push('242424'); // Works for some reason