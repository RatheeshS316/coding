        //---Arrays

   const myArray = [];
    // adding element 


myArray[0]="ratheesh";
myArray[1]="dfereg";
myArray[2]="sathan";
myArray[3]="egedd";
console.log(myArray);                   
console.log(myArray[3]);                 
console.log(myArray.length);             
console.log(myArray[3].length);           
console.log(myArray[myArray.length]);      
console.log(myArray[myArray.length-1]);   





console.log(myArray);             
   //push
myArray.push("college");  
console.log(myArray);             

  //pop
myArray.pop();
console.log(myArray);                

  //unshift
myArray.unshift("study");
console.log(myArray);             

   //shift
myArray.shift();
console.log(myArray);               



                        

                console.log(myArray);  
 
      
                // variable vachi declare panradhu
  const lastItem = myArray.push("love");
     console.log(lastItem);             
     console.log(myArray);               

     const firstItem = myArray.unshift("books");
     console.log(firstItem);              
     console.log(myArray);                

     const popItem = myArray.pop();
     console.log(popItem);               
     console.log(myArray);                


     const shiftItem = myArray.shift();
     console.log(shiftItem);                
     console.log(myArray);


       //delete
            delete myArray[2] ;
            console.log(myArray);     
            console.log(myArray[2]);   

       //splice
        myArray.splice(2,4);
        console.log(myArray);    

        myArray.splice(1,1,"Ratheesh");
        console.log(myArray);       
          myArray.splice(1,0,"Ratheesh");
        console.log(myArray);       



        //slice
        const sliceArray = myArray.slice(2,4);
        console.log(sliceArray);                



        //join
        const joinArray = myArray.join();
        console.log(joinArray);              // ratheesh , Ratheesh , Ratheesh         indha output paka edho normal sentence mari 

       //split 
       const splitArray = joinArray.split(',');
       console.log(splitArray);   // (3) ['ratheesh', 'Ratheesh', 'Ratheesh']

       //concat
         const array1 = [1,2,3];
         console.log(myArray.concat(array1));     // (3) ['ratheesh', 'Ratheesh', 'Ratheesh']  +  (3) [1,2,3]
             //  output is (6) ['ratheesh', 'Ratheesh', 'Ratheesh', 1, 2, 3]

          const newArray = [array1,myArray];
          console.log(newArray);





         // examples
          const cseA = ["ram","charan","sharath"];
          const cseB = ["rath","eesh",];

          const aimlA = ["gant","thilak", "goutam"];
          const aimlB = ["mohan","lal","mamooty"];

          const it = ["itDepartment","class","books"];

          console.log(cseB[0],cseB[2]);            

          const cse = [cseA,cseB];
          const aiml = [aimlA,aimlB];
          console.log(cse[0][1],aiml[1][1]);    

          const college = [ cse , aiml , it];
          console.log(college[0][1][2] , college[2][1][1] , college [1][1][1] );


