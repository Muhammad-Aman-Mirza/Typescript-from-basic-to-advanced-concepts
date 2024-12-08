/**
 * In TypeScript, constructor parameters are used to define the parameters that are
 * passed when creating an instance of a class.
 * These parameters can also be used to initialize class properties.
 * A simple class with a constructor that takes parameters:
 */

// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let person = new Person("Aman", 25);
// console.log(person.name, person.age);

/**
 * Parameter Properties (Shorthand)
  In TypeScript, you can use parameter properties to simplify the definition of constructor parameters. 
  Instead of manually assigning constructor parameters to class properties, you can directly define the 
  properties in the constructor parameters using the public, private, or readonly modifiers.

  public and private Modifiers
  The public modifier makes the parameter a class property and initializes it. Similarly, the 
  private or protected modifier restricts the access to the property.
 */

// class Person {
//   constructor(public name: string, private age: number) {}

//   getAge(): number {
//     return this.age;
//   }
// }
// let person = new Person("Aman", 25);
// console.log(person.name);
// console.log(person.getAge());
// console.log(person.age); // Error: Property 'age' is private and only accessible within class 'Person'.

/**
 * Readonly Properties
   You can also use the readonly modifier, which makes a property immutable after the object is created.
 */
// class Person {
//   constructor(public readonly name: string, private readonly age: number) {}

//   getAge(): number {
//     return this.age;
//   }
// }

// let person = new Person("Aman", 25);
// person.name = "abc"; //  Cannot assign to 'name' because it is a read-only property
// console.log(person.name);
// console.log(person.age); // Property 'age' is private and only accessible within class 'Person'.

/**
 * Optional Parameters
You can make constructor parameters optional by using the ? symbol. This allows you to 
create an object with missing parameters, which will default to undefined.
 */

// class Person {
//   constructor(public name: string, public age?: number) {}
// }

// const person1 = new Person("Alice");
// console.log(person1.name); // Alice
// console.log(person1.age); // undefined

// const person2 = new Person("Bob", 25);
// console.log(person2.name); // Bob
// console.log(person2.age); // 25

/**
 * Default Parameters
   You can also use default values for parameters in the constructor.
 */
// class Person {
//   constructor(public name: string, public age: number = 18) {}

//   describe() {
//     return `${this.name} is ${this.age} years old.`;
//   }
// }

// const person1 = new Person("Alice");
// console.log(person1.describe()); // Alice is 18 years old.

// const person2 = new Person("Bob", 30);
// console.log(person2.describe()); // Bob is 30 years old.

/**
 * Constructor Overloading
  TypeScript doesn't support constructor overloading in the same way as some other languages, 
  but you can simulate it using optional parameters or different logic inside the constructor.
 */
class Person {
  name: string;
  age: number;

  constructor(name: string);
  constructor(name: string, age: number);
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age ?? 18; // Default age is 18 if not provided
  }
}

const person1 = new Person("Alice");
const person2 = new Person("Bob", 30);

console.log(person1.name, person1.age); // Alice 18
console.log(person2.name, person2.age); // Bob 30

/**
 * Summary
Constructor parameters allow you to pass values when creating an object.
You can use parameter properties to simplify class construction.
Parameters can be optional or have default values.
TypeScript uses the public, private, readonly, and other access modifiers to control visibility and mutability of class properties.
 */
