/**
 ** Parameters
 ** Parameters constructs a tuple type from the types used in the parameters of a function type Type.
 */

type MyFunction = (a: string, b: number, c: boolean) => void;

type MyFunctionParameters = Parameters<MyFunction>;

// You can create an example value that matches the parameter types
const exampleParams: MyFunctionParameters = ["Hello", 42, true];

// Log the actual values (not the types)
console.log(exampleParams);

function greet(name: string, age: number): string {
  return `hi, My name is ${name} amd I am ${age} year old.`;
}

type GreetParameters = Parameters<typeof greet>;

console.log(greet("aman", 12));

// type myFunc = (a: string, b: number, c: boolean) => void;
// type test = Parameters<myFunc>;
// let result: test = ["abc", 1, true];
// console.log({ result });

// type T0 = Parameters<() => string>;
// function app(...a: T0) {
//   return a;
// }
// console.log(app());
// type T0 = Parameters<(str: string) => string>;
// function app(...a: T0) {
//   return a[0];
// }
// console.log(app("af"));

// Defining the type T2
// type T2 = Parameters<<T>(arg: T) => T>; // Equivalent to [unknown]

// // Function that accepts parameters of type T2 (which is [unknown])
// function printParameter(params: T2) {
//   // The params are expected to be a tuple of [unknown]
//   console.log(params[0]);
//   return params;
// }

// // Using printParameter with a valid argument
// printParameter([42]); // Output: 42

// // Using printParameter with a string argument
// printParameter(["Hello"]); // Output: Hello

// // Using printParameter with a boolean argument
// printParameter([true]); // Output: true

// declare function f1(arg: { a: number; b: string }): void;
// type T3 = Parameters<typeof f1>;
// function app(param: T3) {
//   console.log({ param });

//   const [{ a, b }] = param; // Destructuring the tuple
//   console.log(a); // Accessing the 'a' property of the object
//   console.log(b); // Accessing the 'b' property of the object
// }
// console.log(app([{ a: 10, b: "Hello" }]));

// type T4 = Parameters<any>;

// function app(...param: T4) {
//   return param[0];
// }
// console.log(app(2, 5));

// type T5 = Parameters<never>; // T5 is []

// // A function that uses T5
// function exampleFn(...args: T5[]) {
//   console.log(args); // This would log an empty array [] as T5 is []
// }

// console.log(exampleFn()); // Works fine, since T5 is []

// type T5 = Parameters<() => never>; // T5 is []

// function exampleFn(...args: T5): void {
//   console.log(args); // No arguments expected, works fine
// }

// exampleFn(); // Works without error because `T5` is []

// type T6 = Parameters<(str: string) => string>;
// function app(...param: T6) {
//   console.log(param[0]); // Accessing the first argument of the function
// }
// console.log(app("fgvwed"));

// T7 represents the parameter type of the function `(fn: Function) => Function`, which is [Function]
// type T7 = Parameters<(fn: Function) => Function>; // T7 will be [Function]

// function app(...fn: T7): Function {
//   // Using T7 as the parameter type (an array with one Function)
//   // Calling the first function in the array and returning its result
//   return fn[0]; // Calling the first function in the array (fn[0])
// }

// // const exampleFn = () => "Hello, World!";
// const exampleFn = "njef";
// // Correct usage: passing an array with a single function
// console.log(app(exampleFn())); // Output: "Hello, World!"

//  function applyFunc<T extends (...args: any[])=> any>(fn: T, ...args: Parameters<T>):ReturnType<T>{
//   return fn(...args)
//  }
//  const results = applyFunc(greet,'aman',1);
//  console.log({results});

/**
  ** Let's break it down step-by-step:
  ** 1. Generic Function (T extends (...args: any[]) => any)
  ** <T extends (...args: any[]) => any>
  ** This part uses generics to allow applyFunc to work with any function type.
  ** T is a generic placeholder for the type of the function fn that will be passed into applyFunc.
  ** T extends (...args: any[]) => any means that T must be a function type, 
  ** where args: any[] means the function can take any number of parameters of any type, and => any means it returns any type.
  ** 2. Parameters<T>
  ** ...args: Parameters<T>
  ** Parameters<T> is a TypeScript utility type that extracts the types of the parameters from the 
  ** function type T and converts them into a tuple type.
  ** This ensures that the arguments passed into applyFunc match the types and order 
  ** of parameters expected by the function fn.
  ** For example:

  ** If you pass a function fn with the signature (x: string, y: number) => void to applyFunc, 
  ** Parameters<T> will be inferred as [string, number], so applyFunc will expect two arguments: a string and a number.
  ** 3. ReturnType<T>
  ** ReturnType<T> is another TypeScript utility type that extracts the return type of the function T.
  ** This ensures that applyFunc returns the same type as the function fn would return.
  ** For example:

  ** If the function fn has the type (a: string) => number, ReturnType<T> will infer that the return type of applyFunc is number.
  ** 4. The Function Body
  ** return fn(...args);
  ** This simply calls the function fn with the spread arguments args and returns whatever result fn would return.
  ** Because args has been inferred to match the parameter types of fn, and ReturnType<T> ensures that 
  ** the return value matches the expected return type, everything is type-safe.
  */

//  function app<T extends (...args:any[])=> any>(fn: T, ...args: Parameters<T>):ReturnType<T>{
//   console.log("===",fn(...args),{...args},{fn});

//   return fn(...args)
//  }

//  const add = (a:number,b:number)=> a+b
//  const results = app(add,5,4)
//  console.log({results});

/**
 ** mapArgs - Applies a function to each argument before passing to another function:
 ** This function maps over the arguments of the function and transforms them before calling the original function.
 */

//   function mapArgs<T extends (...args: any[]) => any, U>(
//     fn: T,
//     transform: (arg: any) => U,
//     ...args: Parameters<T>
//   ): ReturnType<T> {
//     const transformedArgs = args.map(transform);
//     return fn(...transformedArgs);
//   }

// const multiply = (a: number,b:number) => a*b
// const results = mapArgs(multiply,x=>x*2,0,1)
// console.log({results});

/**
 ** createLogger - A higher-order function that logs the arguments and return value of any function:
 */

// function createLogger<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>)=>ReturnType<T>{
//   return (...args: Parameters<T>)=>{
//     console.log('Arguments:', args);
//     const result = fn(...args);
//     console.log('Return:', result);
//     return result;

//   }
// }

// const subtract = (a: number, b: number) => a - b;
// const loggedSubtract = createLogger(subtract);

// const results = loggedSubtract(10, 3);
// Logs:
// Arguments: [10, 3]
// Return: 7

/**
 ** 4. retryFunc - A function that retries another function a certain number of times if it fails:
 */

//  function retryFunc<T extends (...args: any[])=> any>(fn: T,retries: number,...args: Parameters<T>):ReturnType<T>{
//   let lastError:any
//   for(let i = 0; i < retries; i++){
//     try{
//       return fn(...args)
//     }
//     catch(error){
//       lastError = error
//       console.log(`Attempt ${i + 1} failed, retrying...`);
//     }
//   }
//   throw lastError;
//  }

//  const riskyFunction = (a:number,b:number)=>{
//   if(Math.random()>0.5) throw new Error('Random Failure!')
//     return a+b
//   }
// const results = retryFunc(riskyFunction,3,5,7)
// console.log("retryFunc=",{results});

/**
 ** memoizeFunc - Caches the result of a function based on its arguments to avoid redundant calls:
 */

// function memoizeFunc<T extends (...args: any[]) => any>(fn: T):(...args: Parameters<T>)=> ReturnType<T>{
//   const cache: Map<string,ReturnType<T>> = new Map()

//   return (...args: Parameters<T>)=>{
//     const key = JSON.stringify(args)
//     if(cache.has(key)){
//       console.log('Returning cached result!');
//       return cache.get(key)!
//     }
//     const result = fn(...args)
//     cache.set(key,result)
//     return result
//   }
// }

// const expensiveCalculation = (x: number, y: number) => {
//   console.log('Calculating...');
//   return x * y;
// };

// const memoizedCalculation = memoizeFunc(expensiveCalculation);

// const result1 = memoizedCalculation(2, 3);  // Logs "Calculating..." and then 6
// const result2 = memoizedCalculation(2, 3);  // Logs "Returning cached result" and then 6

/**
 ** debounceFunc - A function that delays the invocation of another function until after a certain amount of time has passed:
 */
function debounceFunc<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
const logMessage = (message: string) => console.log(message);

const debouncedLog = debounceFunc(logMessage, 2000);

debouncedLog("Hello!"); // This will only log after 2 seconds of inactivity
