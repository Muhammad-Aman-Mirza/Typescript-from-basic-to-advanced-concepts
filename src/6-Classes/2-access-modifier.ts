/**
 ** 1. public (Default Access Modifier)
 ** The public access modifier means that the member is accessible from anywhere, both inside and outside the class.
 ** All members in a class are public by default if no modifier is specified.
 */

//  class Car{
// 	public make: string;
// 	public model: string;

// 	constructor(make:string, model:string){
// 		this.make = make
// 		this.model = model
// 	}

// 	public displayInfo():void{
// 		console.log(`${this.make} ${this.model}`);
// 	}
//  }

//  const car = new Car('Honda','Tesla')
//  console.log(car.make,car.displayInfo());
 
 /**
	** 2. private
  ** The private access modifier restricts the member from being accessed outside the class.
  ** Private members can only be accessed within the class they are defined. 
  */

	// class Car{
	// 	private engine: string

	// 	constructor(engine: string){
	// 		this.engine = engine
	// 	}

	// 	public startEngine():void{
	// 		console.log('Engine started');
	// 	}

	// 	public getEngineDetails(): string{
	// 		return this.engine
	// 	}
	// }

	// const car = new Car('V8')
	// console.log(car.getEngineDetails());
	// console.log(car.engine);

	/**
	 ** 3. protected
   ** The protected access modifier makes the member accessible within 
   ** the class and its subclasses (derived classes).
   **  It cannot be accessed from outside the class hierarchy. 
	 */

	//  class Car {
	// 	protected make: string;

	// 	constructor(make: string){
	// 		this.make = make
	// 	}
	//  }

	//  class ElectricCar extends Car{
	// 	public displayMake(): void{
	// 		console.log(this.make);
			
	// 	}
	//  }
	
	// const car = new ElectricCar('Tesla')
	// car.displayMake()
	// console.log(car.make);
	
	/**
	 ** 4. readonly
	 ** Though not exactly an access modifier, readonly is used to make properties immutable after initialization.
   ** You can use readonly with any of the access modifiers.
	 */

	 class Car{
		readonly brand: string;

		constructor(brand: string){
			this.brand = brand
		}
	 }
	 const car = new Car('Tesla')
	 console.log(car.brand);
	 car.brand = "Honda" // // Error: Cannot assign to 'brand' because it is a read-only property
	 
