    // 🔹 Important Types to Learn (for variables)

                    // number

                    // string

                    // boolean

                    // any

                    // unknown

                    // array (string[], number[])

                    // tuple ([string, number])

                    // union (string | number)

                    // type inference (automatic detection)






// Number
let age: number = 25;

// String
let firstName: string = "Ratheesh";

// Boolean
let isLoggedIn: boolean = true;

// Any (can hold anything – not recommended)
let randomValue: any = 123;
randomValue = "Hello";  // no error

// Unknown (safer than any, needs type check)
let input: unknown = "test";
if (typeof input === "string") {
  console.log("Unknown value (string):", input.toUpperCase());
}

// Array
let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ["apple", "banana", "orange"];

// Tuple (fixed length & fixed types)
let person: [string, number] = ["Ravi", 30];

// Union Type (variable can be multiple types)
let statusCode: string | number;
statusCode = "success";
statusCode = 200;


// Type Inference (TypeScript automatically knows the type)
let city = "Chennai"; // string
let count = 100;      // number

// 🔹 Print all outputs
console.log("Age:", age);
console.log("First Name:", firstName);
console.log("Is Logged In:", isLoggedIn);
console.log("Random Value:", randomValue);
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Person:", person);
console.log("Statuscode:", statusCode);
console.log("City:", city);
console.log("Count:", count);




// console output 

//   Unknown value (string): TEST
//   Age: 25
//   First Name: Ratheesh
//   Is Logged In: true
//   Random Value: Hello
//   Numbers: [ 1, 2, 3, 4 ]
//   Fruits: [ 'apple', 'banana', 'orange' ]
//   Person: [ 'Ravi', 30 ]
//   Status: 200
//   City: Chennai
//   Count: 100
