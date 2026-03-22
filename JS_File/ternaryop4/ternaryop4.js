  //-----------TERNARY OPERATOR----------------

  // The ternary operator is a shorthand for an if-else statement.
  // It takes three operands: a condition, a value if true, and a value if false.
 


  //syntax for ternary operator
  //condition ? value_if_true : value_if_false;


  let age = 18;
  let drive= age>=18 ? " you can drive ": " you cannot drive" ;
  console.log(drive); // Output: you can drive


  // Example for grade system 

  let marks = 86;
  let grade = marks > 90? " grade A ": marks >80? "grade B": marks>70? "grade c" : marks >60? "grade D": marks >50? "grade E" : "Fail";
  console.log(grade);

  // output is grade B






  // using switch staement
  let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  case "orange":
    console.log("Orange selected");
    break;
  default:
    console.log("Unknown fruit");
}
// Output: Banana selected





// using ternary operator,write the same code in short form

let Fruit = "apple";
let select = (Fruit  === "apple") ? "apple selected":
              (Fruit === "banana" ) ? "banana selected":
              (Fruit === "orange") ? "orange selected": "no fruits are there";
console.log(select);  

// output is apple
