//------------STRING---------------------------//
var myVariable = "mathematics";

//length property
console.log(myVariable.length);  // output is 11



//-------------------STRING METHODS-------------------------//

            //TYPES OF STRING METHODS
//string methods charAt() 
console.log(myVariable.charAt(6));  // output is  a


//string methods indexOf()
console.log(myVariable.indexOf("at"));   // output is 1


//string methods lastIndexOf()
console.log(myVariable.lastIndexOf("at"));   // output is 6


//string methods slice()
console.log(myVariable.slice(5,8));   //output is  mat


//string methods  Uppercase()
console.log(myVariable.toUpperCase());   // output is MATHEMATICS


//string methods lowercase()
console.log(myVariable.toLowerCase());  // output is mathematics


//string methods includes()
console.log(myVariable.includes("mat"));   // output is true
console.log(myVariable.includes("Ash"));   // output is false


//string methods split()
console.log(myVariable.split("e"));   // output is (2) [ 'math', 'matics' ]
console.log(myVariable.split(""));    // output is (11) [ 'm', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's' ]


//string methods replace()
console.log(myVariable.replace("mat", "phy"));   // output is phyhematics



//string methods concat()
let myVariable2 = " is a subject";  
console.log(myVariable.concat(myVariable2));   // output is "mathematics is a subject"    


//string methods repeat()
console.log(myVariable.repeat(2));   // output is "mathematicsmathematics"

 


 // startsWith()
    let greeting = "Hello, world!";    // Expected output: true
 
   if(greeting.startsWith("Hello")){
    console.log("true");
   }
   else{
    console.log("else");
   }


//  Trim extra spaces
let messy = "   I need trimming   " ;      // Expected output: "I need trimming"
console.log(messy.trim());
   // remaining all you Refer Mozilla website for more methods 


   
   // 8. Check if a filename ends with .js
let filename = "app.js";   // Expected output: true
if(filename.endsWith(".js")){
    console.log("true");
}
else{
    console.log("false");
}