/**
 * In TypeScript, a tuple is a fixed-length array where each element can have a different type. Here’s an example of a more complex tuple, which includes various data types like numbers, strings, booleans, and even objects or arrays.
 */

let personInfo: [string,number,boolean,{ address:string,city:string },number[]] =[
	"Aman",
	25,
	true,
	{address:"ABC",city:"efw"},
	[1,2,3,4]
]


console.log(personInfo[0]); 
console.log(personInfo[1]); 
console.log(personInfo[2]); 
console.log(personInfo[3].address);
console.log(personInfo[4][2]); 

let inferredTuple = ["Alice", 25, false] as const;  // inferred as a readonly tuple with exact types

// Interface defining the structure of the object inside the tuple
interface Address {
  street: string;
  city: string;
}

// Define a tuple with a mix of basic types and an object
let userInfo: [string, number, boolean, Address, string[]] = [
  "Alice",                          // Name (string)
  28,                                // Age (number)
  true,                              // Is active (boolean)
  { street: "123 Main St", city: "Wonderland" },  // Address (object with street & city)
  ["Reading", "Hiking", "Coding"]   // Hobbies (array of strings)
];

// Accessing elements
console.log(userInfo[0]); // "Alice" (string)
console.log(userInfo[1]); // 28 (number)
console.log(userInfo[3].city); // "Wonderland" (city from the object)
console.log(userInfo[4][2]); // "Coding" (hobby from the array)

// Define a type alias for the Address object
type Address = {
  street: string;
  city: string;
};

// Define a tuple type that uses this Address type and other elements
type UserInfo = [string, number, boolean, Address, string[]];

// Create a variable of type `UserInfo`
let user: UserInfo = [
  "John",                                 // Name (string)
  35,                                     // Age (number)
  false,                                  // Is active (boolean)
  { street: "456 Elm St", city: "Springfield" }, // Address (Address type)
  ["Gaming", "Photography"]              // Hobbies (array of strings)
];

// Accessing elements
console.log(user[0]); // "John" (string)
console.log(user[3].street); // "456 Elm St" (street from the Address object)
console.log(user[4][1]); // "Photography" (second hobby from the array)

// Define an interface for user preferences
interface Preferences {
  theme: string;
  notificationsEnabled: boolean;
}

// Define a type for the tuple that includes various types
type UserProfile = [
  string,               // Name (string)
  number,               // Age (number)
  Preferences,          // Preferences (interface)
  string[],             // Hobbies (array of strings)
  (number | string)     // User status (can be either number or string)
];

// Create a user profile with the `UserProfile` type
let profile: UserProfile = [
  "Charlie",                       // Name (string)
  40,                              // Age (number)
  { theme: "dark", notificationsEnabled: true }, // Preferences (Preferences interface)
  ["Swimming", "Music", "Travel"], // Hobbies (array of strings)
  "Active"                         // Status (string)
];

// Accessing elements
console.log(profile[0]); // "Charlie" (string)
console.log(profile[2].theme); // "dark" (theme from Preferences object)
console.log(profile[4]); // "Active" (status)


