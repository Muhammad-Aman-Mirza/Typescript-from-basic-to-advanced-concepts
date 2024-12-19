interface Consumer<T> {
  consume: (arg: T) => T; // consume must return the same type it receives
}

// Function that uses the Consumer interface as a parameter
function processItem<T>(consumer: Consumer<T>, item: T): T {
  return consumer.consume(item);
}

// Example consumer
const stringConsumer: Consumer<string> = {
  consume: (arg: string) => {
    console.log("Consuming string:", arg);
    return arg; // Must return the same type (string)
  },
};

const numberConsumer: Consumer<number> = {
  consume: (arg: number) => {
    console.log("Consuming number:", arg);
    return arg; // Must return the same type (number)
  },
};

// Using the function with the consumers
const stringResult = processItem(stringConsumer, "Hello, World!"); // Consuming string: Hello, World!
const numberResult = processItem(numberConsumer, 42); // Consuming number: 42

console.log("Processed string result:", stringResult); // Processed string result: Hello, World!
console.log("Processed number result:", numberResult); // Processed number result: 42
