// 🔹 What is a Type Alias?
        // A type alias gives a name to a type.
        // It’s like creating your own custom datatype.

// 1. Basic Type Alias
type ID = string | number;

let userId1: ID = 101;       // number
let userId2: ID = "A102";    // string
//➡️ Here ID is a type alias that can be either string or number.


//2. Object Type Alias
type Person1 = {
  name: string;
  age: number;
};

let user: Person1 = {
  name: "Ravi",
  age: 25,
};

console.log(user.name); // Ravi


// ➡️ Works similar to interface.

// 3. With Optional and Readonly
type Cars = {
  brand: string;
  model?: string;        // optional
  readonly year: number; // cannot change
};

let myCars: Cars = { brand: "Toyota", year: 2022 };

myCars.brand = "Honda";   // ✅ allowed
// myCar.year = 2023;    // ❌ Error



//4. Function Type Alias
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

console.log(add(5, 3));      // 8
console.log(multiply(5, 3)); // 15


// ➡️ MathOperation is a type alias for a function type.

// 5. Type Aliases with Union
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";  // ✅
// currentStatus = "pending";          // ❌ Error


// ✅ Summary

// type keyword = create alias (custom type name)

// Can be primitive, object, union, or function type

// Similar to interface but more flexible with unions