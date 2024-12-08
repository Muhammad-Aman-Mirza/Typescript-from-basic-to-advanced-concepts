/**
 * In TypeScript, the non-null assertion is a feature that tells the compiler to treat a value as if it is not null or undefined, even though TypeScript's type system might otherwise consider it potentially null or undefined.
 */

function getLength(str: string | null): number {
  return str!.length; // Using non-null assertion because we assume str is not null
}
console.log(getLength(''));

let someValue: string | null = null;

// Later in the code, we are sure that 'someValue' will be assigned a string
someValue = "Hello";

// Using the non-null assertion to inform TypeScript that 'someValue' will never be null
console.log(someValue!.length);  // No error, because we're asserting that it is not null

let user: { name: string } | null = null;

// Using non-null assertion to access 'name' even though 'user' might be null
console.log(user!.name);  // Error-prone, will throw an exception at runtime if user is null
