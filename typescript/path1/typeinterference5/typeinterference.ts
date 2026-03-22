// 🔹 What is Type Inference?

// TypeScript is smart enough to guess (infer) the type of a variable or function return value, even if you don’t explicitly write the type.
// This is called type inference.

// 1. Variable Inference
let x = 10;  // TypeScript infers: number
// x = "hello"; // ❌ Error: string not assignable to number



// ➡️ Even though you didn’t write : number, TS knows x is a number.

// 2. String Example
let message = "Hello"; // inferred as string
// message = 123;      // ❌ Error



// 3. Function Inference

// If the return type is obvious, TS infers it:

function add1(a: number, b: number) {
  return a + b; // return type inferred as number
}

let result = add1(5, 10); // result inferred as number
// result = "test";      // ❌ Error



// 4. Array Inference
let numbers = [1, 2, 3];   // inferred as number[]
// numbers.push("four");  // ❌ Error

let mixed = [1, "two", 3]; // inferred as (string | number)[]



// 5. Best Common Type

// When values are mixed, TypeScript infers a union type:

let data = [1, "hello", true];
// inferred as (string | number | boolean)[]



// 6. Contextual Typing

// Type is inferred based on usage:

document.addEventListener("click", (event) => {
  console.log(event.clientX); // inferred as MouseEvent
});