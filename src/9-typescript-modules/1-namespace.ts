/**
 ** Namespaces
 ** In TypeScript, namespaces are used to organize and share code across multiple files.
 ** Namespaces allow you to group related functionality
 ** into a single unit and prevent naming conflicts.
 */
namespace MyNameSpace {
  export class MyClass {
    constructor(public name: string) {}
    sayHello() {
      console.log(`hi ${this.name}`);
    }
  }
  export function myFunction() {
    console.log("Function inside the namespace");
  }
}

const myClass = new MyNameSpace.MyClass("Aman");
myClass.sayHello();
myClass.sayHello();

namespace OuterNamespace {
  export namespace InnerNamespace {
    export class InnerClass {
      constructor(public value: number) {}
    }
  }
}

const inner = new OuterNamespace.InnerNamespace.InnerClass(5);
console.log(inner.value); // Outputs: 5

namespace MyNamespace {
  export const pi = 3.14;
}

namespace MyNamespace {
  export function calculateArea(radius: number) {
    return MyNamespace.pi * radius * radius;
  }
}

console.log(MyNamespace.calculateArea(9)); // Uses pi from the first declaration
