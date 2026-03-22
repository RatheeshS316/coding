// 🔢 1. What will be the output?
let x = "100";
let y = 100;
console.log(x == y);       // ?
console.log(x === y);      // ?


// 🧮 2. Convert the string "99.99abc" to:
let val1 = "99.99abc";
console.log(Number.parseFloat(val1)); 
// Expected Output:
// Float: 99.99
// Integer: 99


// 🧪 3. Which of these values are integers?
console.log(Number.isInteger(42));        // true
console.log(Number.isInteger(3.14));      // false
console.log(Number.isInteger("42"));      // false
console.log(Number.isInteger(true));      // false


// 🔄 4. Use chaining to:
const string = "56.78999";
const number = 56.6777;
// Convert the string "56.7899" to a number
console.log(Number.parseInt(string));    //56
// Round it to 2 decimal places
console.log(Number.parseFloat(string).toFixed(2));   //56.79
// Convert it back to string
console.log(String(number));   // 56.6777


let val = "56.7899";    // Expected Output: "56.79"
console.log(Number.parseFloat(val).toFixed(2));



// ❓ 5. Which of the following will return true?

console.log(Number.isNaN("Hello"));      // false
console.log(isNaN("Hello"));             // true
console.log(Number.isNaN(NaN));          // true
console.log(isNaN(42));                  // false




// 💡 6. Convert boolean values to numbers

console.log(Number(true));     // 1
console.log(Number(false));    // 0
console.log(Number(true) + 10); // 11


// 🔍 7. What’s the result of parsing?
console.log(Number.parseFloat("25.66kg"));   // 25.66
console.log(Number.parseInt("100px"));       // 100
console.log(Number.parseInt("px100"));       // NaN




// ✅ 8. Use Number.isFinite() to check:
console.log(Number.isFinite(500));         // true
console.log(Number.isFinite("500"));       // false
console.log(Number.isFinite(Infinity));    // false
console.log(Number.isFinite(NaN));         // false



// 🔗 9. Use .toString() to:
// Convert the number 123.456 into a string and check its type.
let num = 123.456;
// Expected: "123.456", and typeof result should be "string"
console.log(String(num));




// 🛑 10. Bonus: Check if a string is a valid number

function isValidNumber(value) {
  return !isNaN(value) && Number.isFinite(Number(value));
}

console.log(isValidNumber("42"));         // true
console.log(isValidNumber("42a"));        // false
console.log(isValidNumber(Infinity));     // false
console.log(isValidNumber("3.14"));       // true
