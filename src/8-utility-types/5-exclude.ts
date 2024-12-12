/**
 ** Exclude
 ** Exclude constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers. 
 */

type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

type A = string | number | boolean;
type B = Exclude<A, boolean>;  // string | number

// `B` now only includes `string | number`, and excludes `boolean`.

type T = string | number | null | undefined;
type NonNullableT = Exclude<T, null | undefined>;  // string | number

type Foo = { a: number; b: string; c: boolean };
type WithoutString = Exclude<keyof Foo, 'b'>;  // 'a' | 'c'

