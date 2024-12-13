/**
 ** In TypeScript, InstanceType is a utility type that constructs a type representing the instance type of a class or constructor function.

 ** It is particularly useful when you want to extract the type of an instance that would be created by a constructor 
 ** function, without directly creating an instance of it.
 */

 class Person {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// The type of the instance of Person is the type we get from InstanceType
type PersonInstance = InstanceType<typeof Person>;

const personInstance: PersonInstance = new Person("Alice", 30);
console.log(personInstance.greet()); // "Hello, my name is Alice and I am 30 years old."

function createPerson(): InstanceType<typeof Person> {
  return new Person("Bob", 25);
}

const personInstance = createPerson();
console.log(personInstance.greet()); // "Hello, my name is Bob and I am 25 years old."
