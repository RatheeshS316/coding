
//1. Number Array
let numbers: number[] = [10, 20, 30, 40];
console.log(numbers);        // [ 10, 20, 30, 40 ]
console.log(numbers[0]);     // 10

//2. String Array
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits);         // [ 'apple', 'banana', 'orange' ]
console.log(fruits[1]);      // banana

//3. Boolean Array
let flags: boolean[] = [true, false, true];
console.log(flags);          // [ true, false, true ]

//4. Using Array<type> Syntax (another way)
let scores: Array<number> = [100, 90, 80];
console.log(scores);         // [ 100, 90, 80 ]

//5. Union Type Array (mix of string & number)
let mixed: (string | number)[] = ["Ravi", 25, "Chennai", 404];        // order change pannikalam but tuple la panna koodathu
console.log(mixed);          // [ 'Ravi', 25, 'Chennai', 404 ]

//6. Array Methods Example
let colors: string[] = ["red", "green"];
colors.push("blue");           // add
console.log(colors);           // [ 'red', 'green', 'blue' ]

colors.pop();                  // remove last
console.log(colors);           // [ 'red', 'green' ]

console.log(colors.length);    // 2