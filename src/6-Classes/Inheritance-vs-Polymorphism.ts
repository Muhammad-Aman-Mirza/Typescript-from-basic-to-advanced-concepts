/**
 **  Inheritance
 */
// class Animal{
// 	constructor(public name: string){

// 	}
// 	speak(){
// 		console.log(`${this.name} makes a sound`);
		
// 	}
// }

// class Dog extends Animal{
// 	constructor(name: string, public breed: string){
// 		super(name)
// 	}

// 	speak(){
// 		console.log(`${this.name} barks`);
		
// 	}
// }
// const dog = new Dog("Buddy", "Golden Retriever");
// dog.speak();
// console.log(dog);

/**
 ** Polymorphism
 */

class Animal{
	speak(){
		console.log("Animal makes a sound");
		
	}
}

class Dog extends Animal{
	speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal{
	speak(){
		console.log("Cat meows");
		
	}
}

const animals: Animal[] = [new Dog(),new Cat()]
animals.forEach(a=>a.speak())

interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const shapes: Shape[] = [new Rectangle(10, 5), new Circle(7)];
shapes.forEach(shape => console.log(shape.area()));
// Output:
// 50
// 153.93804002589985
