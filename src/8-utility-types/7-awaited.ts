/**
 **  Awaited
 ** The Awaited type is a utility type in TypeScript that is used to model the behavior of await in asynchronous functions or the .then() method on Promises. Its purpose is to recursively unwrap the values wrapped inside Promises (or other types like async functions returning promises).

 ** In simpler terms, Awaited<T> helps you extract the type that the promise resolves to. For instance, if you have a Promise<T>, Awaited<Promise<T>> will resolve to the type T.

 ** Explanation of Awaited:
 ** Promise Handling: If you have a Promise<T>, you might want to know the type T that the promise will resolve to. Using Awaited<T>, TypeScript will infer the type that the promise resolves to, much like using await in an async function.

 ** Recursive Unwrapping: One important feature is that Awaited<T> will recursively unwrap promises. For example, if T is a Promise<Promise<U>>, Awaited<Promise<Promise<U>>> will give you U (the type that the inner promise resolves to).
 */

 type MyPromise = Promise<number>;

 type ResolvedType = Awaited<MyPromise>;
 
 type NestedPromise = Promise<Promise<string>>;
 
 type ResolvedNestedType = Awaited<NestedPromise>;
 
//  async function fetchData(): Promise<Promise<string>> {
//    return new Promise((resolve) => setTimeout(() => resolve("Data"), 1000));
//  }
 
//  type ResultType = Awaited<ReturnType<typeof fetchData>>;
//  // ResultType is resolved to `string` after unwrapping the Promise
 
//  // Correcting the code
//  fetchData().then((result) => {
//    console.log(result); // This will log "Data" after the promise resolves.
//  });

// async function fetchData(): Promise<Promise<string>> {
//   return new Promise(resolve => setTimeout(() => resolve("Data"), 1000));
// }

// type unwrapped = ReturnType<typeof fetchData> extends Promise<infer U> ? U : never;
// fetchData().then((result)=>{
//   console.log({result});
  
// })
 
async function fetchData(): Promise<Promise<string>> {
  return new Promise(resolve => setTimeout(() => resolve("Data"), 1000));
}

type ResultType = Awaited<ReturnType<typeof fetchData>>;
// ResultType is automatically `string`, no need to manually unwrap the Promise
fetchData().then((res)=>{
  console.log({res});
  
})
// type Unwrapped = Promise<number> extends Promise<infer U> ? U : never;


// // Function returning a Promise<number>
// function fetchNumber(): Promise<number> {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(42), 1000);
//   });
// }

// // Function returning a Promise<Promise<string>>
// function fetchNestedString(): Promise<Promise<string>> {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(Promise.resolve("Hello, world!")), 1000);
//   });
// }

// Simulating the inferred types
// type Unwrapped = Promise<number> extends Promise<infer U> ? U : never; // `U` will be `number`
// type NestedUnwrapped = Promise<Promise<string>> extends Promise<infer U> ? U : never; // `U` will be `Promise<string>`, which is then unwrapped to `string`

// // Let's log the actual values and type outcomes

// async function test() {
//   // Testing Promise<number>
//   const numberValue = await fetchNumber();
//   console.log("Resolved value from fetchNumber:", numberValue); // Should log: 42
//   console.log("Type of numberValue:", typeof numberValue); // Should log: number

//   // Testing Promise<Promise<string>>
//   const nestedStringValue = await fetchNestedString();
//   const resolvedStringValue = await nestedStringValue; // Unwraps the nested Promise<string>
//   console.log("Resolved value from fetchNestedString:", resolvedStringValue); // Should log: "Hello, world!"
//   console.log("Type of resolvedStringValue:", typeof resolvedStringValue); // Should log: string
// }

// test();

// Function returning a Promise<number>
function fetchNumber(): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => resolve(42), 1000); // Resolves with a number
  });
}

// Function returning a Promise<Promise<string>>
function fetchNestedString(): Promise<Promise<string>> {
  return new Promise(resolve => {
    setTimeout(() => resolve(Promise.resolve("Hello, world!")), 1000); // Resolves with a Promise<string>
  });
}

// TypeScript Types for unwrapping Promises
type Unwrapped = Promise<number> extends Promise<infer U> ? U : never; // This will be `number`
type NestedUnwrapped = Promise<Promise<string>> extends Promise<infer U> ? U : never; // This will be `Promise<string>`, which is then unwrapped to `string`

// Simulate the resolution of promises and log the result
async function test() {
  // Fetch a number (Promise<number>)
  const numberValue: Unwrapped = await fetchNumber(); // Unwrapped type will be `number`
  console.log("Resolved value from fetchNumber:", numberValue); // Logs the resolved value: 42
  console.log("Type of numberValue:", typeof numberValue); // Logs: number
  
  // Fetch a nested string (Promise<Promise<string>>)
  const nestedStringValue: NestedUnwrapped = await fetchNestedString(); // NestedUnwrapped type will be `Promise<string>`
  const resolvedStringValue = await nestedStringValue; // Unwraps the nested promise to get `string`
  console.log("Resolved value from fetchNestedString:", resolvedStringValue); // Logs the resolved value: "Hello, world!"
  console.log("Type of resolvedStringValue:", typeof resolvedStringValue); // Logs: string
}

// Call the test function to execute the code and log the results
test();
