                           // Pratice Strings.
 // convert string into Uppercase
        const myVariable = "Ratheesh";
 console.log(myVariable.toUpperCase());


 //  2. Check if the string starts with "Hello"
   let greeting = "Hello, world!";    // Expected output: true
 
   if(greeting.startsWith("Hello")){
    console.log("true");
   }
   else{
    console.log("else");
   }


 //   3. Replace "cat" with "dog"
let sentence = "My cat is sleeping.";    // Expected output: "My dog is sleeping."
console.log(sentence.replace("cat","Dog"));


// 4. Trim extra spaces
let messy = "   I need trimming   " ;      // Expected output: "I need trimming"
console.log(messy.trim());


//5. Find the index of the word "code"
let line = "I love to code in JavaScript.";     // Expected output: index position of "code"
console.log(line.indexOf("code"));       //10


//6. Split a CSV string into an array
let data = "apple,banana,cherry";   // Expected output: ["apple", "banana", "cherry"]
console.log(data.split(","));


// 7. Get the last 4 characters of a string
let code = "ABC123XYZ";   // Expected output: "XYZ"
console.log(code.slice(6,code.length));


// 8. Check if a filename ends with .js
let filename = "app.js";   // Expected output: true
if(filename.endsWith(".js")){
    console.log("true");
}
else{
    console.log("false");
}


//9. Count how many times "apple" appears
let fruitList = "apple banana apple cherry apple";   // Expected output: 3 (hint: use `split` and check length)
let count = fruitList.split("apple").length-1;
console.log(count);


//Create a new string that repeats "Ha!" 5 times
let repeat = "Ha!";     // Expected output: "Ha!Ha!Ha!Ha!Ha!"
console.log(repeat.repeat(5));


// Check if a string is a palindrome (same forwards and backwards)
let word = "madam"; 
let reverse = word.split("").reverse().join("");
if(word == reverse){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}



//✅ 12. Capitalize the first letter of each word (like titleCase)
let input = "hello from javascript";   // Expected output: "Hello From Javascript"
let titlecase = input.split(" ").charAt(toUpperCase());
console.log(titlecase);