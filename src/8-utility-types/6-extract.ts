/**
 ** Extract 
 ** In TypeScript, the Extract utility type is used to construct a type by extracting from a given Type all the union members that are assignable to a specified Union. Essentially, it filters out the members from a union type that are not assignable to another type.
 */

 type A = string | number | boolean;
 type B = string | boolean;
 
 type Result = Extract<A, B>;  // Result will be 'string | boolean'
 type Vehicle = "car" | "truck" | "bus" | "bike";
type Motorized = "car" | "truck" | "bus";

type MotorizedVehicles = Extract<Vehicle, Motorized>;  // "car" | "truck" | "bus"
type T1 = "a" | "b" | "c";
type T2 = "x" | "y";

type Results = Extract<T1, T2>;  // Result will be never
