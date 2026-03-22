//------------------------INTERMEDIATE LEVELS----------------




/*                  7. Function Expression

Function-a variable-ku assign panradhu */

        const greet = function(name) {
        console.log("Hi " + name);
        };

        greet("Arun");  // Output: Hi Arun

      //Here, the function doesn’t have a name — it’s stored inside a variable (greet).





/*                 8. Anonymous Function
              Function name illaama irukkuradhu


            🔹 Anonymous Function in JavaScript:
            An anonymous function is a function without a name.
            

              const greet = function() {                  //Here, function() doesn’t have a name.
                console.log("Hello!");
                };                               
               greet();  // Output: Hello! 



//                NOT anonymous:
                    const sayHello() {                      //This is a named function, because the function name is sayHello.
                    console.log("Hi");
                    }



/*🔹 Where do we use anonymous functions?
                 Function Expressions */
            const add1 = function(a, b) {
            return a + b;
            };



           // Callbacks
             setTimeout(function() {
                        console.log("Time's up!");
                        }, 1000);


      //      Immediately Invoked Function Expressions (IIFE)
                             (function() {
                            console.log("I ran immediately!");
                            })();



/*                       9. Arrow Function (ES6)
                    Short syntax: (a, b) => a + b
*/

                    const add = (a, b) => a + b;
                    console.log(add(2, 3));  // Output: 5
// If the function has only one line and returns, you can skip {} and return.




//                   10. Callback Function
//    Function-a inoru function-kku argument-a pass panradhu
                
                function greet(name, callback) {
                console.log("Hi " + name);
                callback();
                }

                function sayBye() {
                console.log("Bye!");
                }

                greet("Arun", sayBye);
                // Output:
                // Hi Arun
                // Bye!



//                   11. Nested Functions
//        Function-kulla function define panradhu

                function outer() {
                console.log("Outer function");

                function inner() {
                    console.log("Inner function");
                }

                inner();  // Call inside
                }

                outer();
                // Output:
                // Outer function
                // Inner function




//               12. Scope (Local / Global)
//   Variable visibility – inside/outside function

                let globalVar = "I am global";

                function test() {
                let localVar = "I am local";
                console.log(globalVar); // OK
                console.log(localVar);  // OK
                }

                test();

// console.log(localVar); ❌ Error: localVar not accessible outside
/* Global Scope – Available everywhere

Local Scope – Available only inside the function/block
*/


//             13. Hoisting
// Function declared below can still work (declaration only)


                                    sayHi();                   // ✅ Works because of hoisting

                                    function sayHi() {
                                    console.log("Hi!");
                                    }


                           //  But this won’t work with function expressions:


                                sayHi();  // ❌ Error: Cannot access 'sayHi' before initialization

                                const sayHi = function() {
                                console.log("Hi!");
                                };
                  //   Only function declarations are hoisted to the top — not expressions.

