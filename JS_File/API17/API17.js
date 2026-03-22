//                              // Web STorage API


//                              // Session Storage
                    document.addEventListener("readystatechange" , (event) =>{
            if(event.target.readyState === "complete"){
                console.log("completed");
                initApp();
            }
        });

        const initApp = () =>{
            const myContent =['array' , 'stack' , 'queue'];
            function myobject(){
                console.log("it is a object");
                const myContent1 =['array' , 'stack' , 'queue'];
                
                function print(){
                    console.log(this.myContent);
                }
            }
        

        window.sessionStorage.setItem("sessionStore",JSON.stringify(myContent));
        const sessionData = JSON.parse(sessionStorage.getItem("sessionStore"));
        console.log(sessionData);
            
        }
              
              // ["array", "stack", "queue"]
                //      0: "array"
                //      1: "stack"
                //      2: "queue"




// //-----------------------------------------------------------------------------------------------------------------------------------------
//                                 //Local Storage
         document.addEventListener("readystatechange" , (event) =>{
    if(event.target.readyState === "complete"){
        console.log("document loading completed");
        content();
    }
 });

 const content = () =>{
    const myc = ['array' , 'queve' , 'stack'];
     scc = function(){
        const name = "ratheesh";
        console.log(this.myc);
     }


     window.localStorage.setItem("myLocalStore" , JSON.stringify(myc));
     const localdata = JSON.parse(localStorage.getItem("myLocalStore"));
     console.log(localdata);
 };

                // ["array", "queve", "stack"]
                //      0: "array"
                //      1: "queve"
                //      2: "stack"




// //----------------------------------------------------------------
//         /*
//            the output is 
//                     complete
//                     {name: 'Dhuddu', myContent: Array(3)}
//         */

//                        document.addEventListener("readystatechange" , (event) => {
//             if(event.target.readyState === "complete")
//             {
//                 console.log("complete");                                         // complete
//                 initApp2();
//             }
//         })

//         const initApp2 = () => {
//             const myContent = [ "Earn" , "Grow" , "Give"];
//             const myObject = {
//                 name:"Dhuddu",
//                 myContent:[ "Earn" , "Grow" , "Give" ],
//                 logName: function(){
//                     console.log(this.name);
//                 }
//             };

//             localStorage.setItem("mySessionStore",JSON.stringify(myObject));
//             const key = localStorage.key(0);
//             console.log(key);                                                //  mySessionStore
//             const key1 = localStorage.length;
//        //     console.log(key1);                                               // 1
//             const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
//             console.log(mySessionData);
//         };



