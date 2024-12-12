/**
 ** In TypeScript, the infer keyword is used to declare a type variable within a conditional type, enabling TypeScript to automatically infer the type of a value based on its structure or behavior. It allows you to create type inference rules in a more flexible and reusable way. 
 ** Purpose of infer in TypeScript
 ** Type Inference in Conditional Types: The infer keyword is typically used within a conditional type (extends clause) to infer a type from a given structure. This makes it possible to extract and manipulate types dynamically based on the input type.

 ** Creating More Generalized Type Logic: infer allows for writing generic, reusable types that can automatically adapt to different kinds of input types.

 ** Extracting Types from Complex Structures: infer is especially useful when dealing with complex data structures or when you want to extract certain parts of a type (e.g., extracting the type of the elements inside a Promise or a function's return type).
 */

// type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// function app(a: number,b: string): boolean{
//   return true
// }

// type Result = MyReturnType<typeof app>
// console.log(app(1,'abc'));

type ElementType<T> = T extends (infer U)[] ? U : never;

type StringArray = string[];
type StringElement = ElementType<StringArray>; // Inferred as 'string'

// Create an array of strings
const stringArray: StringArray = ['Hello', 'World', 'TypeScript'];

// Access an element from the array (which will be of type 'string')
const firstElement: StringElement = stringArray[0];

// Use console.log to display the element and its type
console.log(firstElement);  // Outputs: Hello

type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;

type NumberPromise = Promise<number>;
type UnwrappedType = UnwrapPromise<NumberPromise>; // Inferred as 'number'

// Create a Promise that resolves to a number
const numberPromise: NumberPromise = new Promise((resolve) => {
  setTimeout(() => resolve(42), 1000);
});

// Use `.then` to handle the resolved value of the Promise
numberPromise.then((result: UnwrappedType) => {
  // Log the resolved value, which will be of type 'number'
  console.log(result);  // Outputs: 42
});

