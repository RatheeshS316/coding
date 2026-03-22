// 1. Basic Function (no types)
function greet() {
  console.log("Hello, TypeScript!");
}
greet();  // Hello, TypeScript!



//2. Function with Parameter Types
function add(a: number, b: number) {
  return a + b;
}
console.log(add(5, 10)); // 15


// 👉 Here, a and b must be numbers.
// If you pass a string, TypeScript will show an error.



// 3. Function with Return Type
function multiply(x: number, y: number): number {
  return x * y;
}

let result: number = multiply(3, 4);
console.log(result); // 12


// 👉 The : number after the parameter list means this function must return a number.



// 4. Function with Default Parameter
function greetUser(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

console.log(greetUser());        // Hello, Guest!
console.log(greetUser("Ravi"));  // Hello, Ravi!


//5. Function with Optional Parameter
function printMessage(msg: string, user?: string): void {
  if (user) {
    console.log(`${user}: ${msg}`);
  } else {
    console.log(msg);
  }
}

printMessage("Welcome!");             // Welcome!
printMessage("Welcome!", "Ravi");     // Ravi: Welcome!
// 👉 user? means parameter is optional.


// 6. Function that Returns Nothing (void)
function logMessage(message: string): void {
  console.log("Log:", message);
}

logMessage("System started!");