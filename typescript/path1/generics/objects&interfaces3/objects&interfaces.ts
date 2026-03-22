        // 🔹 1. Objects in TypeScript
// You can define an object and annotate its type.
// Object type annotation
let person: { name: string; age: number } = {
  name: "Ravi",
  age: 25,
};

console.log(person.name); // Ravi


//➡️ Here { name: string; age: number } is the object type.



        // 🔹 2. Optional Properties
// You can make object properties optional using ?.

let student: { name: string; age?: number } = {
  name: "Anu",
};

console.log(student); // { name: 'Anu' }


// ➡️ age? means the property is optional.




     // 🔹 3. Interfaces
// An interface is like a blueprint for objects.
// It defines the shape of the object.

interface Person {
  name: string;
  age: number;
}

// example of interfaces
// let user: Person = {
//   name: "Karthik",
//   age: 30,
// };

// // Define an interface (blueprint for object)
// interface Person {
//   name: string;
//   age: number;
// }

// // Create an object that follows the interface
// let user: Person = {
//   name: "Karthik",
//   age: 30,
// };

// Access properties
//console.log(user.name); // Karthik
//console.log(user.age);  // 30



// ➡️ Person is an interface (reusable type).

// 🔹 4. Interfaces with Optional & Readonly
interface Car {
  brand: string;
  model?: string;   // optional
  readonly year: number; // cannot be changed
}

let myCar: Car = {
  brand: "Toyota",
  year: 2020,
};

myCar.brand = "Honda";   // ✅ allowed
// myCar.year = 2021;    // ❌ error (readonly)
// Define an interface with optional and readonly properties

//example of interfaces with optional and readonly properties
// interface Car {
//   brand: string;
//   model?: string;        // optional
//   readonly year: number; // cannot be changed
// }

// // Create an object that follows the interface
// let myCar: Car = {
//   brand: "Toyota",
//   year: 2020,
// };

// // Allowed: we can change 'brand'
// myCar.brand = "Honda";

// // Not allowed: 'year' is readonly
// // myCar.year = 2021; // ❌ Error: Cannot assign to 'year' because it is a read-only property

// // Print values
// console.log(myCar.brand); // Honda
// console.log(myCar.year);  // 2020




// 🔹 5. Function inside Interface

// Interfaces can also define functions.

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

let calc: Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
};

console.log(calc.add(5, 3));      // 8
console.log(calc.subtract(5, 3)); // 2



// 🔹 6. Interface Extending (Inheritance)

// Interfaces can extend each other.

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let pet: Dog = {
  name: "Buddy",
  breed: "Labrador",
};
