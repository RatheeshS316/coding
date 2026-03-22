                                // functions

  //intro                             
   console.log("ratheesh".toUpperCase());     // Output is RATHEESH





                    //Sum using function 


 //sum function la parameter tharalana default value console la print aagum
            function sum(){
                return 2+2;
            }
            console.log(sum(10,2));         // 4



// correct method is 
            function sum(a,b)
            {
                return a  + b;
            }
             console.log(sum(4,5));       //9
             console.log(sum(12,65));    //77
             console.log(sum(10,3));     //23
             console.log(sum(18,6));     //24
 


    // doubts
             function num(num1,num2){
                console.log(num1);                  //12
                console.log(num2);                  //undefined
                return num1+num2;                   //NaN
             }
             console.log(num(12));



           
             function num(num1,num2){
                console.log(num1);                  
                console.log(num2);                  
              if(num2 == undefined )
              {
                return num1 + num1;    
              }                  // indha statement enna solludu na num2 la value irundha else print pannum illana if print aagum
                  
              else{
                    return num1 + num2;   
              }


            }
             console.log(num(10));               // output is 10   undefined   20
             console.log(num(232,99));          // output is 232  99  331




   // suppose un manager all gmail la before '@' kulla print panna sonna enna panradhu

            console.log("vijay123@gmail.com".slice(0, "vijay123@gmail.com".indexOf("@")));   // output is vijay123
 // this is the method to do



   // easy method neraiya email pannanum ,this is the correct metho not give fixed value 
  function person(email){
    return ( email.slice(0,email.indexOf("@")));
  }
  console.log(person("adam234@gmail.com"));             // output is adam234
  console.log(person("ratheesh13019@gmail.com"));       // output is ratheesh13019







    // name la first letter mattum capital la irukanum

function toProperCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() ;
}
console.log(toProperCase("ratheesh"));        // output is Ratheesh
console.log(toProperCase("vijay"));           // output is Vijay
