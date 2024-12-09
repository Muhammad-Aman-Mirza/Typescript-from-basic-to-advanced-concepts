/**
** Encapsulation
** Encapsulation is one of the fundamental principles of Object-Oriented Programming (OOP). It refers to the bundling of data (attributes) and the methods (functions) that operate on that data within a single unit, known as a class. The main goal of encapsulation is to hide the internal implementation details of an object and only expose a well-defined public interface through which other parts of the code can interact with the object. This concept is often summarized with the phrase "data hiding." 

** Encapsulation provides several benefits:

** Modularity: By encapsulating related data and behavior within a class, you create a self-contained module that can be reused and maintained independently.

** Data Protection: By making the internal data private (or protected), you prevent unauthorized access and modification from outside the class, ensuring data integrity and security.

** Code Flexibility: Encapsulation allows you to change the internal implementation of a class without affecting the code that uses the class, as long as the public interface remains unchanged.
 */

class BankAccount {
  private accountNumber: string;
  private balance: number;

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  public getAccountNumber(): string {
    return this.accountNumber;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(num: number): number {
    num = this.balance;
    return num;
  }

  public widthDraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient balance");
    }
  }
}

const account = new BankAccount("123456789", 1000);

// console.log("Account Number:", account.getAccountNumber()); // Output: "Account Number: 123456789"
// console.log("Balance:", account.getBalance()); // Output: "Balance: 1000"

account.deposit(500);
account.widthDraw(200);

/**
	** Abstraction
	** Simplified Complexity: Abstraction allows you to focus on the high-level design and 
	** behavior of an object, hiding the intricate details that might not be relevant at that level.

	** Code Reusability: By defining common interfaces through abstract classes or interfaces, 
	** you promote code reuse. Concrete classes can inherit from an abstract class or implement 
	** an interface, inheriting its structure and behavior.

	** Flexibility: Abstraction enables you to change the implementation details of concrete classes without
	** affecting the overall functionality of the program, as long as the abstract interface remains unchanged.
 */

abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function printShapeDetails(shape: Shape) {
  console.log("Area:", shape.getArea());
  console.log("Perimeter:", shape.getPerimeter());
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

printShapeDetails(circle);
printShapeDetails(rectangle);

/**
 ** Inheritance
 ** Code Reusability: Inheritance allows you to reuse the functionality
 ** defined in the superclass, reducing the amount of redundant code in your application.
 ** Modularity: Inheritance promotes a hierarchical organization of classes,
 ** making the code more organized and easier to maintain.
 ** Polymorphism: Inherited methods can be overridden in the subclass
 ** to provide specialized behavior, allowing for polymorphic behavior
 ** when dealing with objects of different classes through a common superclass interface.
 */

// class Animal {
//   private name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   makeSound() {
//     console.log("Some generic sound");
//   }

//   getInfo() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   }
// }

// class Dog extends Animal {
//   private breed: string;

//   constructor(name: string, age: number, breed: string) {
//     super(name, age);
//     this.breed = breed;
//   }

//   makeSound() {
//     console.log("Woof!");
//   }

//   getInfo() {
//     return `${super.getInfo()}, Breed:${this.breed}`;
//   }
// }
// const genericAnimal = new Animal("Generic Animal", 5);
// console.log(genericAnimal.getInfo(), genericAnimal.makeSound());

/**
 ** Compile-time Polymorphism (Static Polymorphism): This type of polymorphism is resolved
 ** at compile time. It occurs when the method overloading is used, i.e., having multiple
 ** methods with the same name but different parameter lists. The compiler determines the
 ** appropriate method to call based on the method's signature and the arguments passed
 ** during the function call.

 ** Run-time Polymorphism (Dynamic Polymorphism): This type of polymorphism is resolved at
 ** run time. It occurs when the method overriding is used, i.e., having a method in the
 ** subclass with the same name and signature as the one in the superclass. The method
 ** to be called is determined at run time based on the actual type of the object.
 */

class MathOperations {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

const math = new MathOperations();
console.log(math.add(5, 10)); // Output: 15 (number addition)
console.log(math.add("Hello, ", "World!")); // Output: "Hello, World!" (string concatenation)

// Run-time Polymorphism (Method Overriding)
class Animal {
  makeSound() {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

function animalSound(animal: Animal) {
  animal.makeSound();
}

const dog = new Dog();
const cat = new Cat();

animalSound(dog); // Output: "Woof!" (Dog's sound)
animalSound(cat); // Output: "Meow!" (Cat's sound)
