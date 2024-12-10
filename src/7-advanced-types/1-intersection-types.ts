/**
 ** 1. Intersection Types
 ** Intersection types combine multiple types into one.
 ** This means that a variable must satisfy all of the
 ** combined types.
 */

interface Person {
  name: string;
  age: number;
}

interface Employee {
  jobTitle: string;
}

type PersonEmployee = Person & Employee;

const john: PersonEmployee = {
  name: "John",
  age: 30,
  jobTitle: "Developer",
};
console.log({ john });

/**
 ** 2. Union Types
 ** Union types allow a variable to be one of several types.
 ** It's defined using the | (OR) operator.
 */

function printId(id: number | string) {
  console.log({ id });
}
printId(1000);
printId("abc");

/**
 ** 3. Type Aliases
 ** Type aliases allow you to define a custom name for a type,
 ** which can be a primitive, union, intersection, or even a function.
 */
type StringOrNumber = string | number;

function printValue(value: StringOrNumber) {
  console.log(value);
}

printValue(42); // Valid
printValue("Hello"); // Valid

/**
 ** 4. Conditional Types
 ** Conditional types allow you to define a type based on a condition.
 ** It's similar to a ternary operator in JavaScript but for types.
 */

type IsString<T> = T extends string ? string : number; // Change this to check for `string`

type Test1 = IsString<string>; // Test1 resolves to `string`
type Test2 = IsString<number>; // Test2 resolves to `number`

function test1(id: Test1) {
  return id;
}

function test2(id: Test2) {
  return id;
}

console.log(test1("jv"), test2(12));

/**
 ** 5. Index Types
 ** Index types allow you to define types dynamically based on the keys of an
 ** object or the elements of an array. It’s used with keyof and in.
 */
// interface Person {
//   name: string;
//   age: number;
// }

// type PersonKeys = keyof Person;

// function getProperty(person: Person, key: PersonKeys) {
//   return person[key];
// }

// const person = { name: "Alice", age: 25 };
// console.log(getProperty(person, "name"));

/**
 ** 6. Mapped Types
 ** Mapped types allow you to create a new type by transforming an existing one.
 ** You can iterate over the keys of an existing type.
 */
type Person = {
  name: string;
  age: number;
};

type ReadOnlyPerson = {
  readonly [K in keyof Person]: Person[k];
};
const person: ReadOnlyPerson = { name: "John", age: 30 };
person.name = "Jane";
console.log(person.name);

/**
 ** 7. Type Guards
 ** Type guards are runtime checks that allow you to narrow down the type
 ** of a variable within a certain scope.
 */

function isString(value: any): value is string {
  return typeof value === "string";
}

function greet(value: string | number) {
  if (isString(value)) {
    console.log(`Hello, ${value.toUpperCase()}`); // Safe because value is confirmed to be a string
  } else {
    console.log(`Hello, number ${value}`);
  }
}

greet("John"); // Output: Hello, JOHN
greet(123); // Output: Hello, number 123

/**
 ** 8. Template Literal Types
 ** Template literal types are a way to construct string types by combining
 ** literal types and string templates.
 */
type Greeting = `Hello, ${string}!`;

const greeting: Greeting = "Hello, World!"; // Valid
const badGreeting: Greeting = "Hi, World!"; // Error

/**
 ** 9. Literal Types
 ** Literal types allow you to specify exact values rather than just a general
 ** type like string or number.
 */

type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}

move("left"); // Valid
move("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.

/**
 ** 10. Recursive Types
 ** Recursive types allow a type to reference itself, which can be useful for
 ** complex structures like trees or linked lists.
 */

type Tree<T> = {
  value: T;
  left?: Tree<T>;
  right?: Tree<T>;
};

const tree: Tree<number> = {
  value: 1,
  left: { value: 2 },
  right: { value: 3, left: { value: 4 } },
};
