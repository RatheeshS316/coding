// 🔹 1. any

// Meaning: "I don’t care about the type."

// Turns off type checking → the variable can hold anything, and TypeScript won’t complain.

// Use only if you don’t know or don’t want type safety.

let value1: any;

value1 = 42;          // ✅ number
value1 = "hello";     // ✅ string
value1 = [1, 2, 3];   // ✅ array

let result1: number = value1; // ✅ Allowed (unsafe)


// 👉 Basically, any is escape hatch: no type safety.




// 🔹 2. unknown
// Meaning: "I don’t know the type yet."

// Safer than any → you can assign anything to unknown,
// but you cannot use it directly without type checking.

let value2: unknown;

value2 = 42;          // ✅ number
value2 = "hello";     // ✅ string

//let result: number = value2; // ❌ Error (need type check)

if (typeof value2 === "string") {
  console.log(value2.toUpperCase()); // ✅ Safe
}







// 👉 Use unknown when you don’t know type at first but want to force checking before use.

// 🔹 3. never

// Meaning: "This should never happen."

// A type that has no possible .value.

// Used for:

// Functions that never return (infinite loop, error throw).

// Exhaustive type checking (compiler checks all cases are handled).

// Function example
function fail(msg: string): never {
  throw new Error(msg);
}

// Exhaustive check
type Shape = "circle" | "square";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle": return 3.14;
    case "square": return 4;
    default:
      const _exhaustive: never = shape; // ❌ Error if new case not handled
      return _exhaustive;
  }
}


// 👉 never is for impossible values or code paths.

// ✅ Summary Table
// Type	Can hold values?	Can assign anything to it?	Can assign it to others?	Use case
// any	Yes	Yes	Yes (unsafe)	Disable type checking
// unknown	Yes	Yes	No (without check)	Safer unknown values
// never	No	No	Yes (everything → never)	Impossible cases, exhaustive checks

// 👉 Simple way to remember:

// any → "Do what you want."

// unknown → "Check before you use."

// never → "This should not exist."