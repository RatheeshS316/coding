    // Error and Error Handling


"use strict";                   //  "use strict"; idhu use pannunina strict aah check




            // Error Type	
// SyntaxError	Code structure wrong (missing bracket, etc.)
// ReferenceError	Variable use pannirukkeenga, but define pannala
// TypeError	Wrong type use pannirukkeenga (e.g. null.length)
// RangeError	Number out of allowed range
// EvalError	eval() function misused (rare now)
// URIError	decodeURI or encodeURI wrong usage



//1.
const variable = "string";
console.log(variable);         // ReferenceError
 // string  , inga variable declare(const) pannamalae output vanduruchi it is a big problem en na 


//2.
 //const variable = "string";   
 //console..log(variable);          // SyntaxError 
 //prograam structure thappa type panna adu tha syntax error.


//  //3.
//  const name="ratheesh";
//  name="sathvika";
//  console.log(name);        
//  // therefore it is a TypeError ,orae variable like const,let indha mari variable value change panna mudiyadu adunal aidhu tyeperror


 


                    // Concept and 	Meaning
    // Error-----Code run pannumbodhu varra thavaru
    // try-------Risky code block (error varalam)
    // catch-----Error vandhaa inga handle pannalaam
    // finally---Eppavum run aagum – error irunthaalum illaathaalum
    // throw-----Neenga unga own error create pannalaam


    //  1. try,catch
    //  2.try,catch,finally
    //  3.try,catch,finally,throw





    //example for try,catch

 function getUserName(user) {
   try {
      return user.name.toUpperCase();
   } catch (err) {
      return "Name not found!";
   }
}

console.log(getUserName({ name: "Ratheesh" }));  // RATHEESH
console.log(getUserName(null));                  // Name not found!
console.log(getUserName(23));                    // Name not found!

// values string la illama like Null , undefined , Numbers ,etc.... indha mari edhu vandhalum output "Name not found! varum".





 // example for try,catch and finally
            try {
            let a = 10;
            let b = a / 0;                          // Not an error, but still unusual
            console.log("Result:", b);
            } catch (err) {
            console.log("Error:", err.message);
            } finally {
            console.log("Finally block always run aagum.");                   // Result : infinity
            }                                                                 // finally block always run aagum              
           // infinity was not an error in javascript ,it's an error in java



            try {
            let a = 10;
            let b = a + x; // ❌ 'x' is not defined — ReferenceError
            console.log("Result:", b);
            } catch (err) {
            console.log("Catch block execute aagiduchu: ", err.message);
            } finally {                                                              // catch block execute aagiduchu : x is not defined
            console.log("Finally block always run aagum.");                          // Finally block always run aagum.
            } 


 // example for try,catch,finally,throw

                try {
                let mark = 100;

                if (mark < 0 || mark > 100) {
                    throw new Error("Invalid mark: should be 0–100");
                }

                console.log("Valid mark:", mark);
                } catch (err) {
                console.log("Catch-la pudichachu →", err.message);
                }
  
                 // mark 0 to 100 kulla value irundha try execute aagum illana suppose the value is like(-10,1000) catch block execute aagum

                 // input : -1   output : Catch-la pudichachu → Invalid mark: should be 0–100
                 // input : 80   output : Valid mark : 100