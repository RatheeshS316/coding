     //-------MATH METHODS----------//
    
    

// math.PI
console.log(Math.PI); // 3.141592653589793



// math truncate
console.log(Math.trunc(Math.PI));   //3 
console.log(Math.trunc(3.455));    //3


// math.round
console.log(Math.round(3.4)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.6)); // 4




// math.ceil
console.log(Math.ceil(3.1));    //4
console.log(Math.ceil(3.8));   //4



// math.floor
console.log(Math.floor(3.9));   // 3
console.log(Math.floor(3.1));   // 3
console.log(Math.floor(-3.5));  // -4


// math power
console.log(Math.pow(2, 3)); // 8   (2*2*2)
console.log(Math.pow(3, 2)); // 9   (3*3)


// math min 
console.log(Math.min(10,3,45,33,21,1));   // 1



// math max
console.log(Math.max(288,100,32,11,657,0)); // 657





// math random 
console.log(Math.random());  // Random number between 0 and 1
console.log(Math.random() * 10); // Random number between 0 and 10



// math random with range

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.floor(Math.random()*10));  // Random number between 0 and 9
console.log(Math.floor(Math.random()*10)+1);  // Random number between 1 and 10
console.log(Math.floor(Math.random()*100)+1); // Random number between 1 and 100
console.log(Math.floor(Math.random()*1000)+1); // Random number between 1 and 1000 



// code pratice challenge 
const myName = "Ratheeshi";

console.log("Ratheeshi".charAt(Math.floor(Math.random()*9)));  // this is not a best practice, but it works for this example

// 1st preferred way
console.log(myName.charAt(Math.floor(Math.random()*myName.length)));  // this is a best pratice and it will work for any string length


