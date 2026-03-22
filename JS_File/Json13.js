             //JSON Javascript Object Notations
             //text format
             // to send and receive data in many programming language


         const myObj = {                                       // objects
            name:"ratheesh",
            year:"second",
            college:function(){
                return console.log("Prathyusha Engineering College");
            }
         };
        console.log(myObj);         //{name: 'ratheesh', year: 'second', college: ƒ}
        console.log(myObj.name);    //ratheesh
        myObj.college();             // Prathyusha Engineering College




        // inga kulla file JSON method la send panradhu
                 
                 //  object to JSON Strings.


  const sendJSON = JSON.stringify(myObj);  
   // it is converted into object into JSON string , it ignores the function because JSON cant stringify the functions
 
 
  console.log(sendJSON);                  //{"name":"ratheesh","year":"second"} ---> ithu paka normal aah iruku
  console.log(sendJSON.myObj);            // undefined , sendJSON  is a string not an object adunala object access panna undefined tha varum+
  console.log(typeof sendJSON);           // string
  console.log(typeof myObj);              // object



                    // JSON string to javascript Objects.

 const receiveJSON = JSON.parse(sendJSON);        
 // convert JSON string back to javascript object
 // JSON.parse() is the opposite of JSON.stringify()



 console.log(receiveJSON);                //{name: 'ratheesh', year: 'second'}  
 console.log(receiveJSON.name);           // ratheesh
 console.log(typeof receiveJSON);         //object
