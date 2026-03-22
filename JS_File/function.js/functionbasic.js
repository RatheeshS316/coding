/*                     FUNCTIONS

                /* basic level

                            1.function
                            2.function declaration
                            3.function call
                            4.parameters and arguments
                            5.return statement
                            6.default parameters


                1. What is a Function

       Code block that can be reused again and again
       explanation:
            A function is a reusable block of code that does a specific task. */


                        function sayHello() {
                        console.log("Hello!");
                        }

                        sayHello();  // Can call it many times
                        sayHello();  // Output: Hello!





/*
                       2. Function Declaration

function greet() {}

Explanation:
This is how you define (declare) a function in JavaScript.*/

                function greet() {   // It is a declaration
                console.log("Hi there!");
                }
                greet();




/*


                            3. Function Call

   greet(); – call pannumbodhu run aagum
    Explanation:
    Using () calls the function and makes it run.
                                                            */
                function greet() {
                console.log("Hi there!");
                }
                 greet();  // it is a function call 
                  
                 // Output: Hi there!





/*                       4. Parameters & Arguments

        Function-ku input values kudukkarthu
        Parameter = variable name used in function definition

        Argument = actual value you pass when calling the function  */

            function greet(name) {     // name = parameter
            console.log("Hello, " + name);
            }
            greet("Arun");             // "Arun" = argument






/*                        5. Return Statement

                    Function-la result return pannradhu
                    Explanation:
                    return sends data back from the function.  */

                        function add(a, b) {
                        return a + b;
                        }

                        let result = add(3, 5);  // result = 8
                        console.log(result);     // Output: 8







/*                        6. Default Parameters
          Input kudukkala-na default value use aagum
*/

                    function greet(name = "Guest") {
                    console.log("Hello, " + name);
                    }

                    greet();           // Output: Hello, Guest
                    greet("Priya");    // Output: Hello, Priya