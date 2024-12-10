/**
** Method Overriding in TypeScript
** In TypeScript, method overriding allows a subclass (child class) to provide a specific implementation for a method that is already defined in its superclass (parent class). This is part of Object-Oriented Programming (OOP) and is typically used to modify or extend the behavior of a method inherited from a parent class.

** Key Points:
** Inheritance: The child class inherits from the parent class, and it can override methods from the parent class.
** Same Method Signature: The overridden method in the child class must have the same name, return type, and parameters as the method in the parent class.
** Access Modifiers: The access modifier (e.g., public, protected, private) of the overridden method in the child class should match the access modifier in the parent ** class or be more permissive. 
 */

// class Animal {
//   // Parent class method
//   speak(): void {
//     console.log("Animal speaks");
//   }
// }

// class Dog extends Animal {
//   // Overriding the 'speak' method in the child class
//   speak(): void {
//     console.log("Dog barks");
//   }
// }

// const animal = new Animal();
// animal.speak();  // Output: Animal speaks

// const dog = new Dog();
// dog.speak();  // Output: Dog barks


// class Dog extends Animal {
//   // Overriding the 'speak' method and calling the parent class method using 'super'
//   speak(): void {
//     super.speak();  // Calling the parent method
//     console.log("Dog barks");
//   }
// }

// const dog = new Dog();
// dog.speak();
// Output:
// Animal speaks
// Dog barks

class Animal {
  speak(message: string): void;
  speak(message?: string): void {
    if (message) {
      console.log("Animal speaks: " + message);
    } else {
      console.log("Animal speaks");
    }
  }
}

class Dog extends Animal {
  // Overriding and extending functionality
  speak(message: string = "Woof!"): void {
    super.speak(message);  // Call the parent class's method
    console.log("Dog says: " + message);
  }
}

const animal = new Animal();
animal.speak("Hello");  // Output: Animal speaks: Hello

const dog = new Dog();
dog.speak("Bark");  // Output: Animal speaks: Bark
                    //         Dog says: Bark
