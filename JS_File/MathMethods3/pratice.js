// Exercises


//  1. Find the largest and smallest number
let a = 10, b = 20, c = 5;   // Use Math.max() and Math.min()
console.log(Math.max(a,b,c));   //20


//  2. Round a number to the nearest integer
 let num = 7.5;   // Use Math.round()
console.log(Math.round(num));     //8


//  3. Round down a number
  let number = 4.9;    // Use Math.floor()
  console.log(Math.floor(number));     //4


//  4. Round up a number
  let number1 = 2.1;  // Use Math.ceil()
    console.log(Math.ceil(number1));
 


//  5. Get a random number between 0 and 1
// Use Math.random()
console.log(Math.random());   //0.38023337373



// 🧠 Intermediate Level

// 🟠 6. Get a random number between 1 and 100
    console.log(Math.floor(Math.random()*100)+1);   //76
// // Expected output: any number from 1 to 100


// 🟠 7. Convert negative number to positive
 let number2 = -50;  // Use Math.abs()
 console.log(Math.abs(number2));    //50


// 🟠 8. Find the square root of 144
 // Use Math.sqrt()
 const A = 144;
 console.log(Math.sqrt(A));   //12


// 🟠 9. Raise 2 to the power of 5
 // Use Math.pow()
 let C = 2;
 console.log(Math.pow(C,5));   //32



// 🟠 10. Generate a random whole number between 1 and 6 (like a dice roll)
 // Expected output: 1 to 6 (inclusive)
 console.log(Math.floor(Math.random()*6));      


// 🔥 Advanced Level

// 🔴 11. Create a function to generate a random number between any two numbers
// Example: randomBetween(10, 20) ➝ 13 (or any number from 10 to 20)
console.log(Math.floor(Math.random()*10)+10);


