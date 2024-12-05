// Array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Array of strings
let fruits: string[] = ['apple', 'banana', 'cherry'];

// Array of booleans
let isActive: boolean[] = [true, false, true];

// Defining a type for an object
interface Person {
  name: string;
  age: number;
  isEmployed: boolean;
}

// Array of Person objects
let people: Person[] = [
  { name: 'Alice', age: 30, isEmployed: true },
  { name: 'Bob', age: 25, isEmployed: false },
  { name: 'Charlie', age: 35, isEmployed: true }
];

// Accessing array items
console.log(people[0].name);  // Alice

// Defining a 2D array (Array of arrays)
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements in the 2D array
console.log(matrix[0][0]);  // 1
console.log(matrix[2][1]);  // 8

// Using map to double each number in the array
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);  // [2, 4, 6, 8]

// Using filter to get only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]

// Using reduce to sum all numbers
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 10

// Destructuring the array
let [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4,5]
