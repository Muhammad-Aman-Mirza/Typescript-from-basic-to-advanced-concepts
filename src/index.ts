interface Consumer<out T> {
  consume: (arg: T) => T;
}
function app<T>(consume: Consumer<T>, item: T): T {
  return consume.consume(item);
  console.log();
}

let consumeNumber: Consumer<number> = {
  return consume: (arg: number) => console.log(arg),
};
const numberResult = app(consumeNumber, 42);
console.log({ numberResult });
