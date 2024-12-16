/**
 ** ReturnType
 ** Return type constructs a type consisting of the return type of function Type. 
 */

// function fetchUser():{name: string,age: number}{
// 	return {
// 		name:'aman',age:20
// 	}
// }

// type userData = ReturnType<typeof fetchUser>

// const user: userData = {name: 'Jane Doe', age: 25 }
// console.log({user},fetchUser());

// function fetchUser(name: string,age: number){
// 	return { name, age };
	
// }

// type userData = ReturnType<typeof fetchUser>

// const user: userData = {name: 'Jane Doe', age: 20 }
// console.log({user},fetchUser('Jane Doe',25));

// function getData():string{
// 	return "hi"
// }

// function handleData(data: ReturnType<typeof getData>){
// 	return data
// }

// console.log(handleData(getData()));


// type T  = ReturnType<()=> string>
// function app():T{
// 	return "hi ,hey"
// }
// console.log(app())

// type T1 = ReturnType<(s: string) => string>;
// function app(s:string):T1{
// 	console.log({s});
// 	return s
	
// }

// console.log(app("aman"));

// type T2 = ReturnType<<T>()=>T>
// function app(name:string,age:number):T2{
// 	return `${name},${age}`
// }
// console.log(app('John',12));

// Define T3 as a function type that returns a tuple of two arrays
// type T3<T extends number[], U extends number[]> = () => [T, U];

// // Function that uses T3 as the return type
// function exampleFunction<T extends number[], U extends number[]>(arr1: T, arr2: U): T3<T, U> {
//     return () => [arr1, arr2]; // Return both arrays as a tuple
// }

// const result = exampleFunction([1, 2, 3], [4, 5, 6]); // result will be a function that returns a tuple
// console.log(result()); // Logs [[1, 2, 3], [4, 5, 6]]

// declare function f1():{ a:number,b:number }
// type t4 = ReturnType<typeof f1>
// let res: t4 = {a:1,b:2}
// console.log(res);

// type T5 = ReturnType<any>;
// function app():T5{
// 	return "hi"
// }
// console.log(app());

// type T6 = ReturnType<never>; // T6 will be 'never'

// // Function that returns 'never'
// function throwError(): never {
//     throw new Error("This is an error!");
// }

// // Example function that uses T6 as its return type
// function exampleFunction(): T6 {
//     throwError(); // This will invoke a function with a return type of 'never'
//     // You can't return anything here, since the function never completes
// }

// console.log(exampleFunction());

/**
 ** You cannot use ReturnType<string> directly because string is a type, not a function. ReturnType<T> is a utility type that extracts the return type of a function type T. For it to work, you need to pass a function type to ReturnType, not a primitive type like string.

 ** If you try to use ReturnType<string>, TypeScript will throw an error because string is not a valid function type. Here's the error you would get:
 ** Type 'string' does not satisfy the constraint '(...args: any[]) => any'.
 */
// Define a function type
// type MyFunction = () => string;

// // Using ReturnType to get the return type of MyFunction (which is string)
// type T7 = ReturnType<MyFunction>; // T7 will be 'string'

// function exampleFunction(): T7 {
//     return "Hello, world!"; // This works because T7 is 'string'
// }

// const result = exampleFunction();
// console.log(result); // Logs 'Hello, world!'

// type T8 = ReturnType<Function>; // This will be 'any'

// function exampleFunction(): T8 {
//     return "This can be anything"; // Since T8 is 'any', it can return anything
// }

// const result = exampleFunction();
// console.log(result); // Logs "This can be anything"

type MyFunction = (a: number, b: number) => string;
type T8 = ReturnType<MyFunction>; // T8 will be 'string'

function exampleFunction(): T8 {
    return "This is a string"; // Since T8 is 'string', this works fine
}

const result = exampleFunction();
console.log(result); // Logs "This is a string"

