             //--------------SWITCH STATEMENT---------------

// syntax for switch statement
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  // Add more cases as needed
  default:
    // Code to execute if no cases match
    break;
}




// example for switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;          
    case 5:
        console.log("Friday");      
        break;
    case 6: 
        console.log("Saturday");
        break;      
    case 7:
        console.log("Sunday");
        break;
    default:        
        console.log("Invalid day");
  
        break;
}   
// output: Wednesday


// example2 for switch statement with multiple cases
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "banana":
        console.log("This is a fruit");
        break;
    case "carrot":
        console.log("This is a vegetable");
        break;
    default:
        console.log("Unknown item");
        break;
}
// output: This is a fruit



// example3 for switch statement with expressions
let score = 85;
switch (true) {
    case (score >= 90):
        console.log("Grade: A");
        break;
    case (score >= 80):
        console.log("Grade: B");
        break;
    case (score >= 70):
        console.log("Grade: C");
        break;
    case (score >= 60):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
        break;
}
// output: Grade: B
