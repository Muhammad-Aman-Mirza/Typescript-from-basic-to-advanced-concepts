// src/index.ts
const message: string = "Hello, TypeScript!";
console.log(message); // This will print the message to the console when run

// src/index.ts
const message: string = "Hello, TypeScript!";
console.log(message); // This will print the message to the console when run

interface CarFeatures{
	hasSunroof:boolean;
	color: string;
	engineType: string;
}

class Car{
	private brand: string;
	private model: string;
	private year: number;
	private features: CarFeatures;

	constructor(brand: string, model: string, year: number, features: CarFeatures){
		this.brand = brand
		this.model = model
		this.year = year
		this.features = features
	}

	public displayCarDetails():void{
		console.log(`Car Details: ${this.year} ${this.brand} ${this.model}`);
		console.log(`Has Sunroof: ${this.features.hasSunroof ? "Yes" : "No"}`);
		console.log(`Color: ${this.features.color}`);
		console.log(`Engine Type: ${this.features.engineType}`);
	}

	private startEngine():void{
		console.log("THe car engine is now running");
		
	}
	public drive():void{
		console.log("The car is now driving");
		this.startEngine()
		
	}
	public updateFeatures(features: CarFeatures):void{
		this.features = features
		console.log("Car features updated");
		
	}
	public static compareCars(car1: Car,car2:Car):string{
		if(car1.year > car2.year){
			return `${car1.brand} ${car1.model} is newer then ${car2.brand} ${car2.model}`
		} else if(car1.year < car2.year){
			return `${car2.brand} ${car2.model} is newer than ${car1.brand} ${car1.model}`
		} else{
			return `${car1.brand} ${car1.model} and ${car2.brand} ${car2.model} are the same year`
		}
	}
}

// Create an object of the Car class
const myCar = new Car("Tesla", "Model 3", 2023, {
  hasSunroof: true,
  color: "Red",
  engineType: "Electric",
});

// Display car details
// myCar.displayCarDetails();

// Drive the car (using public method)
// myCar.drive();

// Update the car features
// myCar.updateFeatures({ hasSunroof: false, color: "Blue", engineType: "Electric" });
// myCar.displayCarDetails();

// Static method usage (without creating an instance of the class)
const car2 = new Car("Toyota", "Camry", 2021, {
  hasSunroof: false,
  color: "Silver",
  engineType: "Gasoline",
});
// console.log(Car.compareCars(myCar, car2));

class Bus{
	static numberOfWheels: number = 4

	static describeWheels():string{
		return `Bus usually have ${Bus.numberOfWheels} wheels`
	}
}

// console.log(Bus.describeWheels());

class Bus1 {
	private color:string;
	constructor(color: string){
		this.color = color
	}

	describeColor():string{
		return `This bus is ${this.color}`
	}
}

const myBus = new Bus1("red")

// console.log(myBus.describeColor());

class Car2 {
  static numberOfWheels: number = 4;  // Static property
  private color: string;

  constructor(color: string) {
    this.color = color;  // Instance property
  }

  // Static method
  static describeWheels(): string {
    return `Cars usually have ${Car2.numberOfWheels} wheels.`;
  }

  // Instance method
  describeColor(): string {
    return `This car is ${this.color}.`;
  }
}

// Static method: Called without an instance
// console.log(Car2.describeWheels());  // "Cars usually have 4 wheels."

// Instance method: Called on an instance of the class
const myCar2 = new Car2('blue');
// console.log(myCar2.describeColor());  // "This car is blue."

class DataFetcher{
	private simulateCall<T>(data:T,delay:number):Promise<T>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				if(Math.random() > 0.1){
					resolve(data)
				}else{
					reject(new Error('Failed to fetch data'))
				}
			},delay)
		})
	}

	public async fetchUserData(userId: string): Promise<any>{
		try{
			console.log("Fetching user data.");
			const user = await this.simulateCall({ userId, name:"Aman" },1000)
			console.log('User data fetch:',user);
			return user
		}
		catch(error){
			console.log('Error fetching user data:', error);
			throw error
		}
	}

	public async fetchUserPosts(userId: string):Promise<any[]>{
		try{
			console.log('Fetching user posts...');
			const posts = await this.simulateCall([
				{ postId: 1, content: 'First post' },
				{ postId: 2, content: 'Second post' }

			],1500)
			console.log('User posts fetched:', posts);
			return posts;
			
		}catch(error){
			console.log('Error fetching user posts:', error);
			throw error
		}
	}

	public async fetchCommentsForPost(postId: number){
		try{
			console.log('Fetching comments...');
			const comments = await this.simulateCall(
				[
          { commentId: 1, text: 'Great post!' },
          { commentId: 2, text: 'Nice work!' }
        ],
        1000

			)
			console.log('Comments fetched:', comments);
      return comments;
		} catch(error){
			console.log('Error fetching comments:', error);
			throw error
			
		}
	}

	public async fetchUserDetailsWithPosts(userId: string):Promise<void>{
		try{
			const user = await this.fetchUserData(userId)
			const posts = await this.fetchUserPosts(userId)

			for(const post of posts){
				const comments = await this.fetchCommentsForPost(post.postId)
				console.log(`Comments for post ${post.postId}:`, comments)
			}
			console.log('All data fetched successfully!');
    } catch (error) {
      console.log('Error fetching user details with posts:', error);
    }
	}
// Fetch user details and handle everything with promises chaining
public fetchUserDetailsWithPromises(userId: string): void {
	this.fetchUserData(userId)
		.then((user) => {
			return this.fetchUserPosts(userId).then((posts) => ({ user, posts }));
		})
		.then(({ user, posts }) => {
			const commentsPromises = posts.map((post) =>
				this.fetchCommentsForPost(post.postId).then((comments) => ({
					postId: post.postId,
					comments
				}))
			);
			return Promise.all(commentsPromises).then((commentsData) => ({
				user,
				posts,
				commentsData
			}));
		})
		.then(({ user, posts, commentsData }) => {
			console.log('Fetched user:', user);
			console.log('Fetched posts:', posts);
			console.log('Fetched comments:', commentsData);
		})
		.catch((error) => {
			console.error('Error in fetching details with promises:', error.message);
		});
}
}

// Example usage
const fetcher = new DataFetcher();
const userId = '123';

// Using async/await
fetcher.fetchUserDetailsWithPosts(userId);

// Using promises chaining
fetcher.fetchUserDetailsWithPromises(userId);

