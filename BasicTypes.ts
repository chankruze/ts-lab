/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Oct 05 2020 14:56:35 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import { printType } from "./utils";

// boolean
let isDone: boolean = false;
let isDone2 = true || false;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let bigInt: bigint = 100n; // ES2020

// string
let color: string = "blue";
color = "red";

let fullName: string = `Khushboo Kumari`;
let age: number = 20;
let sentence: string = `Hello, my crush name is ${fullName}. She is ${age}
years old.

She is an honourable, kind, pure-hearted, hard working girl. May god give
her all the goodies she deserves in life.`;

// array
// using type of the elements
let list: number[] = [1, 2, 3, 4];
// using generic array type
let list2: Array<number> = [1, 2, 3, 4];

// tuple
// express an array with a fixed number of elements
// whose types are known, but need not to be same.
let tuple1: [string, number];
// initialize tuple
tuple1 = ["khushu", 20]; // OK
// tuple1 = [20, "khushu"] // Error

//enum
enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}
let c: Color = Color.Green;

enum Color2 {
  Red = 1, // 1
  Green, // 2
  Blue, // 3
}

enum Color3 {
  Red = "#f00",
  Green = "#0f0",
  Blue = "#00f",
}
let colorHex: string = Color3.Red;

let color1: string = Color[2];
let color2: string = Color2[2];
// let color3: string = Color3["#00f"] // Error

// unknown
let notSure: unknown = 4;
notSure = "khushu is a comedian !";
// OK, definitely a boolean (overrides as in JS)
notSure = true;

// any
let looselyTyped: any = 4;
// OK, ifMethodExists() might exist at runtime
// looselyTyped.ifMethodExists(); // runtime error
// OK, toFixed exists (but the compiler doesn't check)
looselyTyped.toFixed();
let strictlyTyped: unknown = 4;
// strictlyTyped.toFixed(); // compile time error
// [ERROR] 02:00:03 ⨯ Unable to compile TypeScript:
// BasicTypes.ts:85:1 - error TS2571: Object is of type 'unknown'.

// void
function warnUser(): void {
  console.log("Warning!");
}
let unusable: void = undefined;
// OK if `--strictNullChecks` is false
// unusable = null
// [ERROR] 02:06:07 ⨯ Unable to compile TypeScript:
// BasicTypes.ts:95:1 - error TS2322: Type 'null' is not assignable to type 'void'.

// null & undefined
// subtype of all other types
// Not much else we can assign to these variables!
let undef: undefined = undefined;
let nulll: null = null;

// never
// `never` is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.
// Variables also acquire the type never when narrowed by any type guards that can never be true.
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
// Inferred return type is never
function fail() {
  return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}

// Object
declare function create(o: object | null): void;

// OK
// create({ prop: 0 });
// create(null);

// error
// create(43)
// create("string")
// create(false)
// create(undefined)

// Type assertions
// Type	assertions are a way to tell the compiler "trust me, I know what I'm doing."

// as-syntax
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// angle-bracket notation
let someValue2: unknown = "this is a string";
let strLength2: number = (<string>someValue).length;

const BasicTypes = () => {
  console.log("\n**** BasicTypes.ts ****\n");
  // boolean
  printType(isDone);
  printType(isDone2);
  // number
  printType(decimal);
  printType(hex);
  printType(binary);
  printType(octal);
  printType(bigInt);
  // string
  printType(color);
  printType(sentence);
  // array
  printType(list);
  printType(list2);
  // tuple
  printType(tuple1);
  // enum
  printType(Color);
  printType(Color2);
  printType(Color3);
  // unknown
  printType(notSure);
  // any
  printType(looselyTyped);
  // void
  warnUser();
  // undefined & null
  printType(undef);
  printType(nulll);
  // type assertions
  printType(someValue);
  printType(strLength);
};

export default BasicTypes;
