/**
 ** 1. Calling the Parent Class Constructor
 ** In TypeScript, when you create a subclass that extends a parent class, you often want to call 
 ** the constructor of the parent class from the subclass. This is where ** super comes in.
 ** In the subclass constructor, you use super() to invoke the parent class constructor.
 ** If the parent class constructor expects arguments, you pass them to super().
 */

//  class Animal{
// 	name: string;
// 	age?:number;
// 	constructor(name: string,age?:number){
// 		this.name = name
// 		this.age = age
// 	}
// 	speak(){
// 		console.log(`${this.name},${this.age} makes a sound.`);
		
// 	}
//  }

//  class Dog extends Animal{
// 	constructor(name: string,age?:number){
// 		super(name,age)
// 	}

// 	speak(){
// 		super.speak()
// 		console.log(`${this.name} barks.`);
		
// 	}
//  }

// const dog = new Dog("Buddy",19);
// dog.speak();


/**
 ** Calling Parent Class Method:
 */

class Animal{
	makeSound(){
		console.log('Animal makes a sound');
		
	}
}

class Dog extends Animal{
	makeSound() {
		super.makeSound()
		console.log('Dog barks');
		
	}
}
const dog = new Dog()
dog.makeSound()
// console.log(dog);

/**
 ** 3. Using super in a Constructor with Optional Parameters:
 */

class Shape{
	constructor(public color: string){}

}

class Circle extends Shape{
	constructor(color: string, public radius: number){
		super(color)
	}

	getArea(){
		return Math.PI * this.radius ** 3
	}
}

const circle = new Circle('red',5)
console.log(circle.getArea());

