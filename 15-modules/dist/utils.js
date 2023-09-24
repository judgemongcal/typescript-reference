export function add(x, y) {
    return x + y;
}
export function sample(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
// If there is no 'exports', TS treats the file as a script, not as a module.
