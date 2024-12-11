/**
 **  1. Partial<T>
 ** Description: Makes all properties of a type optional.
 ** Use case: Useful when you want to modify or update some properties of an object without having to provide all of them.
 ** 1. Optional Updates:
 ** When updating an object, you might not want to change all of its properties. By using Partial<T>, you can define a type where only a subset of the object's properties is required, allowing partial updates without needing to specify every property.

 ** Example: Let's say you have a User object with properties name, email, and age, but you only want to update the email and leave the name and age untouched. Using Partial<User>, you can specify only the properties that need to be updated.
 */
interface User {
  name: string;
  age: number;
  email: string;
}

function updateUser(user: User, updates: Partial<User>) {
  return { ...user, ...updates };
}

const user: User = { name: "Alice", age: 30, email: "alice@example.com" };
const updatedUser = updateUser(user, { age: 31 });

console.log(updatedUser);

interface User {
  name: string;
  email: string;
  age: number;
}

// A function to update a user, allowing partial updates
function updateUser(id: number, user: Partial<User>) {
  // Logic to update only the provided fields
}

updateUser(1, { email: "new.email@example.com" }); // Only email is updated

/**
 ** 2. Flexible Object Creation:
 ** When creating or initializing objects, especially in cases where some properties are optional or can be provided later, Partial<T> can be used. For instance, when constructing objects dynamically, you may not know all the properties up front, so making them optional (with Partial<T>) is helpful.

 ** Example: If you're building a user profile and don't have all the information initially, Partial<T> lets you create an object with just some of the properties first, and add others later.
 */

let userProfile: Partial<User> = { name: "John" }; // Start with just the name

// Later, you can add more properties
userProfile.email = "john@example.com";
userProfile.age = 30;

/**
 ** 3. Function Arguments with Optional Properties:
 ** If you have a function that might receive an object where some properties are optional, Partial<T> ensures that TypeScript enforces only the properties that are passed and allows any subset of the full object type.
 */

function printUserDetails(user: Partial<User>) {
  console.log(user.name, user.email); // Only prints available properties
}

printUserDetails({ name: "Alice" }); // Works fine
printUserDetails({ email: "alice@example.com" }); // Also works fine
