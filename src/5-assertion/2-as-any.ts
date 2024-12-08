let value: any = 5;
/**
 * In TypeScript, the any type is used to represent values that can be of any type. It acts as a way to bypass TypeScript's strict type-checking system and allows for greater flexibility when you're unsure of the type of a value, or when you are migrating JavaScript code to TypeScript and don't want to immediately define types for every value.
 */

value = "Hello";
value = true;

console.log({value});

function fetchData():any{
	return fetch('https://jsonplaceholder.typicode.com/posts').then(resp=>resp.json())
}

console.log(fetchData());


/**
 * as any is often used when you want to bypass TypeScript’s type checking system and explicitly tell the compiler to treat a value as having the any type. This allows you to do anything with that value without TypeScript raising type errors.
 */

let values: unknown = "This is a string";
let valueAsAny = values as any;  // Now `valueAsAny` is treated as `any`
valueAsAny = 100;               // No error, even though the original type was `unknown`
console.log({valueAsAny});
