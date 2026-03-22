// 🔹 What is enum?

/* Enum (Enumeration) = group of named constants (either number or string).
 Used when you have a fixed set of related values. */

        // 🔹 Types of Enums in TypeScript


 // 1. Numeric Enums (default)
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

let move1: Direction = Direction.Up;

console.log(move1);            // 0
console.log(Direction.Left);  // 2


// 👉 By default, numbering starts from 0.

// 2. Numeric Enum with Custom Values
enum Direction1 {
  Up = 1,
  Down,   // 2
  Left,   // 3
  Right   // 4
}

console.log(Direction1.Right); // 4


// 👉 If you assign one value, the rest auto-increment.

//3. String Enums
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let mov: Direction2 = Direction2.Up;

console.log(mov);            // "UP"
console.log(Direction2.Left);  // "LEFT"


// 👉 Here, values are fixed strings, not numbers.

// 4. Heterogeneous Enums (string + number mixed)
enum Result {
  Success = 1,
  Failure = "FAILED"
}

console.log(Result.Success); // 1
console.log(Result.Failure); // "FAILED"


// 👉 Rarely used, but possible.

// 🔹 Why use Enums?

// ✅ Makes code readable & maintainable
// ✅ Avoids hardcoding numbers/strings everywhere
// ✅ Gets auto-completion in VSCode

// 🔹 Example: Real Use Case
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

function handleResponse(code: Status) {
  if (code === Status.Success) {
    console.log("✅ Success");
  } else if (code === Status.NotFound) {
    console.log("❌ Not Found");
  } else {
    console.log("⚠️ Server Error");
  }
}

handleResponse(Status.Success);   // ✅ Success
handleResponse(Status.ServerError); // ⚠️ Server Error


//🔥 So, enum = named constants for better readability & less error-prone code.