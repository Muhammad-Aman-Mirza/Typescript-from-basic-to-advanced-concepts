/**
 ** Pick<T, K> is useful when you want to create a new type that has only a specific set
 ** of properties from an existing type, while excluding the others.
 */
interface User {
  name: string;
  age: number;
  email: string;
  address: string;
}
type UserContactInfo = Pick<User, "name" | "email">;

const user: UserContactInfo = {
  name: "Alice",
  email: "alice@example.com",
};

const anotherUser: UserContactInfo = {
  name: "Bob",
  email: "bob@example.com",
};

// Error: Property 'age' does not exist on type 'UserContactInfo'.
const invalidUser: UserContactInfo = {
  name: "Charlie",
  email: "charlie@example.com",
  age: 30, // Error here
};
