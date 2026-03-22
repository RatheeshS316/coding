// 1. Simple Tuple
let person: [string, number] = ["Ravi", 25];
console.log(person);      // [ 'Ravi', 25 ]
console.log(person[0]);   // Ravi
console.log(person[1]);   // 25



// 2. Wrong order ❌
/*
let wrongPerson: [string, number] = [25, "Ravi"]; 
// Error: Type 'number' is not assignable to type 'string'        
*/
// order correct ah podanum illana error varum


// 3. Tuple with more values
let employee: [number, string, boolean] = [1, "Ratheesh", true];
console.log(employee);    // [ 1, 'Ratheesh', true ]

// 4. Tuple with optional element
let product: [string, number?];
product = ["Laptop"];
console.log(product);     // [ 'Laptop' ]
product = ["Laptop", 50000];
console.log(product);     // [ 'Laptop', 50000 ]

// 5. Tuple with Union inside
let data: [string, string | number];
data = ["ID", 101];
console.log(data);        // [ 'ID', 101 ]
data = ["Status", "Success"];
console.log(data);        // [ 'Status', 'Success' ]

// 6. Array of Tuples
let students: [number, string][] = [
  [1, "Arun"],
  [2, "Vijay"],
  [3, "Meena"]
];
console.log(students);
// [ [1, 'Arun'], [2, 'Vijay'], [3, 'Meena'] ]
