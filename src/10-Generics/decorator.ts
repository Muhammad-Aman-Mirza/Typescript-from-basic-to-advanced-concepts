/**
 ** In TypeScript, a decorator is a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. Decorators allow you to add metadata to elements in your code or modify their behavior in a reusable way. Decorators are often used in TypeScript to implement design patterns like dependency injection, logging, or validation.
 */

/**
 ** 1) Class Decorators
 ** A class decorator is applied to a class declaration. It is a function that takes the class constructor as its argument and can modify or replace the class.

 */
// function MyClassDecorator(constructor: Function) {
//   console.log("Class decorator applied:", constructor.name);
// }

// @MyClassDecorator
// class MyClass {
//   constructor() {
//     console.log("MyClass instance created");
//   }
// }

// const myInstance = new MyClass();
// console.log({ myInstance });

/**
 ** 2) Method Decorators
 ** Method decorators are applied to methods of a class. They are invoked with three arguments: the target (the class prototype), the method name, and the descriptor (method metadata). You can use method decorators to modify the method behavior or metadata.
 */
// function Log(target: any, key: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     console.log(`Calling ${key} with args: ${JSON.stringify(args)}`);
//     const result = originalMethod.apply(this, args);
//     console.log(`${key} returned: ${result}`);
//     return result;
//   };

//   return descriptor;
// }

// class MyClass {
//   @Log
//   sayHello(name: string) {
//     return `Hello, ${name}!`;
//   }
// }

// const obj = new MyClass();
// obj.sayHello("Alice");

/**
 ** 3) Accessor Decorators
 ** Accessor decorators are used to modify the getter or setter of a property. They work similarly to method decorators, but they target the property accessor instead of the method.
 */

// function logAccessor(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const originalGet = descriptor.get;
//   const originalSet = descriptor.set;

//   descriptor.get = function () {
//     console.log(`Getting value of ${propertyKey}`);
//     return originalGet?.call(this);
//   };

//   descriptor.set = function (value: any) {
//     console.log(`Setting value of ${propertyKey} to ${value}`);
//     originalSet?.call(this, value);
//   };

//   return descriptor;
// }

// class MyClass {
//   private _name: string = "";

//   @logAccessor
//   get name() {
//     return this._name;
//   }

//   set name(value: string) {
//     this._name = value;
//   }
// }

// const obj = new MyClass();
// obj.name = "Bob";
// console.log(obj.name);

/**
 ** 4) Property Decorators
 ** Property decorators can be applied to properties of a class. They are passed the target (class prototype) and the name of the property.
 */

// function PropertyLogger(target: any, key: string) {
//   let value: any;

//   const getter = () => {
//     console.log(`Getting value of ${key}`);
//     return value;
//   };

//   const setter = (newValue: any) => {
//     console.log(`Setting value of ${key} to ${newValue}`);
//     value = newValue;
//   };

//   Object.defineProperty(target, key, {
//     get: getter,
//     set: setter,
//   });
// }

// class MyClass {
//   @PropertyLogger
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const obj = new MyClass("Alice");
// obj.name = "Bob";
// console.log(obj.name);

/**
 ** 5) Parameter Decorators
 ** Parameter decorators are applied to parameters of methods and can be used to track metadata about parameters.
 */
function LogParameter(target: any, methodName: string, parameterIndex: number) {
  console.log(`Method: ${methodName}, Parameter index: ${parameterIndex}`);
}

class MyClass {
  greet(@LogParameter message: string) {
    console.log(message);
  }
}

const myClassInstance = new MyClass();
myClassInstance.greet("Hello!");
