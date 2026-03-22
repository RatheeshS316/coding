//-----------------NUMBERS------------------- 
const myNumber = 42;
const myFloat = 42.00;
const  myVariable ="42";

console.log(myNumber); // 42
console.log(myFloat); // 42
console.log(myVariable); // "42" 

// == simply compares the values not datatypes
console.log(myNumber == myFloat); // true
console.log(myNumber == myVariable); // true
console.log(myFloat == myVariable); // true



// === compares both values and datatypes
console.log(myNumber === myFloat); // true
console.log(myNumber === myVariable); //false
console.log(myFloat === myVariable); // false



// != compares values not datatypes
console.log(myNumber != myFloat); // false
console.log(myNumber != myVariable); // true
console.log(myNumber != myVariable); // true



// !== compares both values and datatypes
console.log(myNumber !== myFloat); // false
console.log(myNumber !== myVariable); // true
console.log(myFloat !== myVariable); // true



// convert string to number
const myVar = "42";       // "42" as a string
console.log(Number(myVar));    // 42 as a number
console.log(Number("rath"));   // NaN (Not a Number, invalid conversion)
console.log(Number(true));   // 1 (true is converted to 1)
console.log(Number(false));  // 0 (false is converted to 0)
console.log(Number(true)+3);  // 4 (true is converted to 1, then added to 3)
console.log(Number(false)+3); // 3 (false is converted to 0, then added to 3)
// we use addition operation to demonstrate conversion
console.log(Number(myVar) + 3);      // 45 as a number (addition)



// convert number to string
const myNum = 42;         // 42 as a number
console.log(String(myNum));    // "42" as a string
console.log(String(myNum)+3);  // "423" as a string (concatenation)



//--------------NUMBER METHODS-------------------

        // TYPES OF NUMBER METHODS


// isInteger() checks if a value is an integer 
console.log(Number.isInteger(myNumber));       // true
console.log(Number.isInteger(myVariable));   // false , because it is a string
console.log(Number.isInteger(myFloat));       // false , because it is a float


// parseFloat() converts a string to a floating-point number
const myString1 = "3.14";
const myString2 = "42.24aass";
console.log(Number.parseFloat(myString1));       // 3.14
console.log(Number.parseFloat(myString2));       // 42.24 (stops at the first non-numeric character)
const myfltt = 23.5655555;
console.log(Number.parseFloat(myfltt).toFixed(2));   // "23.57" (converts float to string with 2 decimal places)     



//parseInt() converts a string to an integer

const myFlt = 23.55;
const myVar1 = "23.55";
console.log(Number.parseInt(myVariable));       // 42 (converts string to integer)
console.log(Number.parseInt(myFlt));       // 23 (converts float to integer, truncating the decimal part)
console.log(Number.parseInt(myVar1));       // 23 (converts string to integer, truncating the decimal part)


// convert number into string 
console.log(myNumber.toString());     // "42" is a string
console.log(myFlt.toString());    // "23.55" is a string



// chaining 
const myV1 = "23.54444";
console.log(parseFloat(myV1).toFixed(3).toString());  // "23.544"



// isNaN() checks if a value is NaN (Not a Number)
console.log(Number.isNaN(myNumber));       // false (42 is a number)
console.log(Number.isNaN(myVariable));   // false (string "42" is not NaN)
console.log(Number.isNaN("rath"));       // false (string "rath" is not a number)
console.log(Number.isNaN(NaN));       // true (NaN is indeed Not a Number)
console.log(isNaN("rath")); // true (global isNaN function also checks for NaN)
console.log(isNaN(myVariable)); // false (global isNaN function checks if the value can be converted to a number, and "42" can be converted to 42)
console.log(isNaN(myNumber)); // false (global isNaN function checks if the value can be converted to a number, and 42 is a valid number)




// isFinite() checks if a value is a finite number
console.log(Number.isFinite(myNumber));       // true (42 is a finite number)   
console.log(Number.isFinite(myVariable));   // false (string "42" is not a finite number)
console.log(Number.isFinite(Infinity));       // false (Infinity is not finite)