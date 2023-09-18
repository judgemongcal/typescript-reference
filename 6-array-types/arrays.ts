const activeUsers: string[] = [];

activeUsers.push("John");
// activeUsers.push(12); // Won't work since activeUsers array is a string array

const ageList: number[] = [45, 76, 89];

ageList.push(100);
ageList[0] = 2333;

// Alternate Syntax
const bools: Array<boolean> = [];

type Point = {
    x: number;
    y: number;
};

const points: Point[] = []; // custom type

points.push({ x: 5, y: 4 });

// Multidimensional Arrays
const board: string[][] = [
    ["X", "O", "X"],
    ["O", "O", "X"],
    ["X", "O", "O"],
];
