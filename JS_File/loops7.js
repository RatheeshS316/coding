                 //-----LOOP STATEMENT------------

            //TYPES: for-loop , while-loops and do-while-loop

/* In JavaScript, loops are used to execute a block of code repeatedly, either a set number of times
 or while a condition is true. Here are the main types of loops:   */

//-----------------------------------------------------------------------------------------------------------------------------------
              

                // For-loop

        // syntax for for-loop statement
            for (initialization; condition; increment)
                {
            // code to run each iteration
                }


        // example for for-loop statements
        const fruits = ["apple", "banana", "cherry"];
         for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
            }                                               
     // Output: apple, banana, cherry



//-----------------------------------------------------------------------------------------------------------------------------------


               // while-loop

  // syntax for while-loop statements 
                while (condition) {
                // code to run while condition is true
                }


                
 //example for while-loop statement
                            let i = 0;
                while (i < fruits.length) {
                console.log(fruits[i]);
                i++;
                }
                // Output: apple, banana, cherry


//----------------------------------------------------------------------------------------------------------------------------------


                            // do-while-loop 

    //syntax for do-while-loop statement

                        do {
                        // code to run at least once, then repeat while condition is true
                        } while (condition);


    // example for do-while-loop 
                      let j = 0;
                do {
                console.log(fruits[j]);
                i++;
                } while (i < fruits.length);
                // Output: apple, banana, cherry

//----------------------------------------------------------------------------------------------------------------------------------


                     //break statement 
            for (let i = 0; i < 5; i++) 
                {
                if (i === 4) break;    // stops before 4
                console.log(i);
                }
        //output is 0 1 2 3 

//------------------------------------------------------------------------------------------------------------------------------------

                    //continue statement
                    for (let i = 0; i < 5; i++) {
                        if (i === 2) continue; // skips 2
                        console.log(i);
                        }

        // output is 0 1 3 4 

//------------------------------------------------------------------------------------------------------------------------------------
