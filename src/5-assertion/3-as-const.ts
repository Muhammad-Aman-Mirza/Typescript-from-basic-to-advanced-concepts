/**
 * In TypeScript, the as const assertion is used to mark values as literal types rather than more general types. This makes TypeScript treat values as immutable and ensures that their types are inferred more precisely.
 */

// Without 'as const'
const color = "red";
console.log({color}); // Type: string

// With 'as const'
const colors = "red" as const;
console.log({colors}); // Type: "red"

// Without 'as const'
const numbers = [1, 2, 3];
console.log({numbers}); // Type: number[]

// With 'as const'
const num = [1, 2, 3] as const;
console.log({num}); // Type: readonly [1, 2, 3]

// Without 'as const'
const person = { name: "Alice", age: 30 };
console.log({person}); // Type: { name: string; age: number }


// With 'as const'
const persons = { name: "Alice", age: 30 } as const;
console.log({persons}); // Type: { readonly name: "Alice"; readonly age: 30 }

const directions = ["up", "down", "left", "right"] as const;
type Direction = typeof directions[number];
// Direction is "up" | "down" | "left" | "right"

console.log({directions});

const config = {
  theme: "dark",
  version: 1,
} as const;

// Trying to modify the properties will result in a TypeScript error:
config.theme = "light";  // Error: Cannot assign to 'theme' because it is a read-only property.






