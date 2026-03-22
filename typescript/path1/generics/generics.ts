// 🔹 What are Generics?

// Generics = a way to make your code reusable and type-safe.

// Instead of fixing a type, you make it a placeholder (like T), and later TypeScript infers the actual type when you use it.

// Think of it like a function parameter, but for types.

// 🔹 Example 1: Generic Function
function identity<T>(value: T): T {
  return value;
}

// Usage
console.log(identity<string>("Hello"));  // Output: Hello
console.log(identity<number>(100));      // Output: 100


// <T> → T is a generic type placeholder.

// When calling, identity<string>("Hello") means T = string.

// TypeScript checks everything stays consistent.

// 🔹 Example 2: Type Inference (No need to specify type)
function identity1<T>(value: T): T {
  return value;
}

let str = identity1("Hi");   // T inferred as string
let num = identity1(50);     // T inferred as number



// 🔹 Example 3: Generic with Arrays
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst([1, 2, 3]));        // number
console.log(getFirst(["a", "b", "c"]));  // string




// Here, T[] means “array of T”.

// The return type is also T.

// 🔹 Example 4: Generic Interface
interface Box<T> {
  value: T;
}

let stringBox: Box<string> = { value: "Hello" };
let numberBox: Box<number> = { value: 123 };



// 🔹 Example 5: Generic Constraints (extends)

// Sometimes you want to restrict what T can be.

function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello"));  // ✅ works (string has length)
console.log(getLength([1, 2, 3])); // ✅ works (array has length)
// console.log(getLength(123));    // ❌ Error (number has no length)



// 🔹 Example 6: Generic Class
class Storage1<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

let numStorage = new Storage1<number>();
numStorage.add(10);
numStorage.add(20);
console.log(numStorage.getAll()); // [10, 20]

let strStorage = new Storage1<string>();
strStorage.add("apple");
strStorage.add("banana");
console.log(strStorage.getAll()); // ["apple", "banana"]

// ✅ Summary

// Generics = placeholders for types.

// Syntax: <T> (can use <U, V> if multiple).

// Works in functions, interfaces, classes.

// Ensures type-safety + reusability.

// 👉 Do you want me to prepare a roadmap-style note (like “1. Generic functions → 2. Generic arrays → 3. Constraints → 4. Interfaces → 5. Classes”) with small code snippets for revision?

// You said:
// Do you want me to also make a real-world example comparing any vs unknown in API response handling?
// ChatGPT said:

// Yes 👍 that’s actually the best place to understand any vs unknown because API responses are often uncertain. Let’s do a real-world style example:



// 🔹 Case 1: Using any (unsafe)


// Fake API returning unknown shape
// function fetchData(): any {
//   return JSON.parse('{"name": "Ravi", "age": 25}');
// }

// let data: any = fetchData();

// // ❌ No type safety — compiler allows everything
// console.log(data.toUpperCase());     // Runtime error ❌ (not a string)
// console.log(data.age * 2);           // Works (but unsafe)
// console.log(data.nonExistentField);  // Undefined at runtime


// 👉 Problem:

// TypeScript won’t stop you.

// Errors only show up at runtime.

// 🔹 Case 2: Using unknown (safer)


// function fetchData(): unknown {
//   return JSON.parse('{"name": "Ravi", "age": 25}');
// }

// let data: unknown = fetchData();

// // ❌ Compiler stops you — can't use until you check type
// // console.log(data.age); // Error: Object is of type 'unknown'

// // ✅ Proper type narrowing
// if (typeof data === "object" && data !== null && "age" in data) {
//   // Now TypeScript knows 'data' is an object with age property
//   const person = data as { name: string; age: number };
//   console.log(person.name.toUpperCase()); // RAVI
//   console.log(person.age * 2);            // 50
// }