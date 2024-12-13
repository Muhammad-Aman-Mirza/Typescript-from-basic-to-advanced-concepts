/**
 ** In TypeScript, the NonNullable<T> utility type constructs a type by excluding null and undefined from the given type T.
 ** It is helpful when you want to ensure that a variable is not null or undefined but can still hold other values, 
 ** including falsy values like 0, false, or an empty string.

 ** Purpose:
 ** Exclusion of null and undefined: It is used to ensure that a type doesn't include null or undefined. 
 ** This can be useful in situations where you want to enforce that a value must be explicitly present, 
 ** as opposed to being optional or nullable.
 ** Type Safety: It helps avoid runtime errors related to accessing properties or calling methods on null or undefined.
 */

 type MyType = string | number | null | undefined;

 let value: MyType = 'Hello';  // Works fine
 value = null;                  // Allowed
 value = undefined;             // Allowed
 
 // Using NonNullable to exclude null and undefined
 type NonNullableMyType = NonNullable<MyType>;
 
 let nonNullableValue: NonNullableMyType = 'Hello';  // Works fine
//  nonNullableValue = null;  // Error: Type 'null' is not assignable to type 'string | number'.
//  nonNullableValue = undefined;  // Error: Type 'undefined' is not assignable to type 'string | number'.
 
 function getValue(input: string | null | undefined): string {
  // We know that input is either a string, null, or undefined, so we can use NonNullable.
  const nonNullableInput: NonNullable<typeof input> = input!;  // the `!` asserts that it's non-null.
  
  // We can safely use nonNullableInput, as it's guaranteed to not be null or undefined.
  return nonNullableInput.toUpperCase();
}

console.log(getValue('aman'));
