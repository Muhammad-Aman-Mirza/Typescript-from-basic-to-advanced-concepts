/**
 ** 1. Defining an Abstract Class
 ** An abstract class is defined using the abstract keyword. 
 ** It can contain both abstract methods (without implementation) 
 ** and concrete methods (with implementation). 
 */

// abstract class Animal{
// 	abstract makeSound():void

// 	move(): void{
// 		console.log("The animal moves");
		
// 	}
// }


/**
 ** 2. Abstract Methods
 ** An abstract method is a method that is declared but not defined in
 ** the abstract class. Derived classes must implement these methods. 
 */

abstract class Animal{
	abstract makeSound(): void
}

/**
 ** 3. Subclasses Implementing Abstract Methods
 ** Any subclass that extends an abstract class must implement all 
 ** of its abstract methods, unless the subclass is also abstract.
 */

//  class Dog extends Animal{
// 	makeSound():void{
// 		console.log("Woof!");
		
// 	}
// 	move(): void{
// 		console.log("move!");
		
// 	}
//  }

//  class Cat extends Animal{
// 	makeSound(): void {
// 		console.log("Meow!");
		
// 	}
//  }
// let dog = new Dog()
// let cat = new Cat()
// console.log(dog.makeSound(),dog.move(),cat.makeSound());

 /**
	** 4. Instantiating Abstract Classes
	** You cannot instantiate an abstract class directly. It must be extended by a subclass.
  */
 // This will give an error:
// const animal = new Animal(); // Error: Cannot create an instance of an abstract class

// const dogs = new Dog();
// dogs.makeSound();  // Output: Woof!
// dogs.move();       // Output: move

 /**
	** 5. Abstract Class with Concrete Methods
  ** An abstract class can contain both abstract methods (which must be implemented by subclasses) 
	** and concrete methods (which can be used as-is or overridden).
  */

	// abstract class Shape{
	// 	abstract area(): number // abstract method

	// 	display(): void{
	// 		console.log("Displaying shape");
			
	// 	}
	// }

	// class Rectangle extends Shape{
	// 	constructor(private width:number, private height: number){
	// 		super()
	// 	}

	// 	area():number{
	// 		return this.width * this.height
	// 	}
	// }

	// const rect = new Rectangle(10,10)
	// console.log(rect.area());
	// rect.display()
	
	/**
	 ** 6. Abstract Classes with Properties
   ** You can also define properties in an abstract class. These can be accessed or overridden by subclasses.
	 */

	abstract class Person{
		constructor(public name: string){}

		abstract greet(): void
	}

	class Employee extends Person{
		greet(): void {
			console.log(`Hi my name is ${this.name}`);
			
		}
	}

const employee = new Employee("John");
// employee.greet();
// console.log(employee);

/**
 ** 7. Abstract Classes and Interfaces
 ** Abstract classes can implement interfaces, and interfaces can extend abstract classes, which provides a 
 ** lot of flexibility in designing complex class structures.
 */

interface Vehicle{
	startEngine(): void;
}

abstract class Machine implements Vehicle{
	abstract startEngine(): void;

	stopEngine():void{
		console.log("Engine Stopped");
	}
}

class Car extends Machine{
	startEngine(): void {
		console.log("Car engine started");
		
	}
}

const car = new Car()
car.startEngine()
car.stopEngine()
