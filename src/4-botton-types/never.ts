type Shape = 
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; sideLength: number }
  | { kind: 'rectangle'; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'rectangle':
      return shape.width * shape.height;
    default:
      // The `never` type ensures that this code should never be reached
      // If there's an unhandled case in the union, TypeScript will throw an error
      return assertNever(shape);
  }
}

// The `assertNever` function ensures that all cases of the `Shape` type are handled
function assertNever(value: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(value)}`);
}

// Usage examples
const circle: Shape = { kind: 'circle', radius: 5 };
const square: Shape = { kind: 'square', sideLength: 4 };
const rectangle: Shape = { kind: 'rectangle', width: 5, height: 10 };

console.log(getArea(circle));     // 78.54 (Area of circle)
console.log(getArea(square));     // 16 (Area of square)
console.log(getArea(rectangle));  // 50 (Area of rectangle)

const triangle: Shape = { kind: 'triangle', base: 5, height: 10 };
// This will cause a compile-time error because the `triangle` case is not handled
console.log(getArea(triangle));  // Error: Unhandled case
