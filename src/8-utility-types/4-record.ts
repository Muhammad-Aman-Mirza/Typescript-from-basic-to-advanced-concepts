/**
 ** Record
 ** Record constructs an object type whose property keys are Keys and whose property values are Type.
 ** This utility can be used to map the properties of a type to another type.
 */
type FruitPrices = Record<"apple" | "banana" | "orange", number>;
const prices: FruitPrices = {
  apple: 1.2,
  banana: 0.8,
  orange: 1.5,
};

type UserDetails = Record<string, { name: string; age: number }>;
const users: UserDetails = {
  user1: { name: "John", age: 30 },
  user2: { name: "Jane", age: 25 },
};

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

type ColorMapping = Record<Color, string>;
const colorNames: ColorMapping = {
  [Color.Red]: "Red Color",
  [Color.Green]: "Green Color",
  [Color.Blue]: "Blue Color",
};
