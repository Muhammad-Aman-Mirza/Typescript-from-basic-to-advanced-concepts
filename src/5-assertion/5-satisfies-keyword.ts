interface Person {
  name: string;
  age: number;
}

// const person = {
//   name: "Aman",
//   age: 25,
//   country: "PK",
// } satisfies Person;

// console.log({ person }); //  Object literal may only specify known properties, and 'country' does not exist in type 'Person'.

type Box<U, T> = {
  key: U;
  value: T;
};

const box = { key: "abc", value: 42 } satisfies Box<string, number>;
console.log({ box });

interface Animal {
  name: string;
  sound: string;
}

const dog = {
  name: "Dog",
  sound: "Woof",
  color: "Brown",
};

console.log(dog satisfies Animal); // No error because it satisfies the 'Animal' interface (even though it has an extra 'color' field)
