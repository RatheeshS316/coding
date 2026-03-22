                 // OBJECTS

       // key-value pairs in curly braces


    /*  const variable = {
       key 1 : values 1 , key 2 : values 2 ,.......,key n : value n
       key func(){
       }
};
     

*/


const myObj = {
    name:"ratheesh",
    rollno:122
};
console.log(myObj);      //{name: 'ratheesh', rollno: 122}


const anoObj={
    name:"ratheesh",
    empId:122,
    gender:"male",
    action:function(){
        return "hello world";
    },
     content:{
        salary:84000,
        field:"web-developer"
     },
     subDivisions:["earn" ,"grow", "give"]
};
console.log(anoObj);                    //{name: 'ratheesh', empId: 122, gender: 'male', content: {…}, subDivisions: Array(3)}
console.log(anoObj.name);               // ratheesh
console.log(anoObj.empId);              // 122
console.log(anoObj.gender);             //male
console.log(anoObj.content);            // {salary: 84000, field: 'web-developer'}
console.log(anoObj.content.salary);     // 84000
console.log(anoObj.content.field);      // web-developers
console.log(anoObj.subDivisions);       //(3) ['earn', 'grow', 'give']
console.log(anoObj.action());           // hello world



//------------------------------------------------------------------------------------------------------------------------------------------------------
// inheritance


const animal = {
    legs: 4,
    mouth:1,
    control:function(){
        return "talk";
    }
};
console.log(animal.legs);   // 4
console.log(animal.mouth);  //1
console.log(animal.control());  //talk

const dog = Object.create(animal);       // inheritance , animal ulla values la dog ku inherit pannudu
console.log(dog.legs);            //4
console.log(dog.mouth);           //1
console.log(dog.control());        //talk



// same method ,but we do overwrite this inheritance method.

const vehicle ={
    wheels:"four",
    seats:"five",
    operate:function(){
     return "chemicals";
    },
    budget: 3000000
};

console.log(vehicle.operate());

const bike = Object.create(vehicle);                    //  vehicle inherit bike inherit car
//before
console.log(bike.wheels);       //four
console.log(bike.seats);        //five
console.log(bike.operate());    //chemicals
console.log(bike.budget);       //3000000

//after
bike.wheels="two";
bike.seats="two"
bike.operate=function(){ return "petrol"};
bike.budget=4000000;
console.log(bike.wheels);    //output is two two petrol 4000000
console.log(bike.seats);        
console.log(bike.operate());
console.log(bike.budget);

const car = Object.create(bike);
//before
console.log(car.wheels);          //output is  two two petrol 4000000
console.log(car.seats);
console.log(car.operate());
console.log(car.budget);

//after
car.wheels="four";              // output is four four diesel 10000000
car.wheels="four";
car.operate=function(){
    return "diesel";
};
car.budget=10000000;
console.log(car.wheels);
console.log(car.seats);
console.log(car.operate());
console.log(car.budget);


//--------------------------------------------------------------------------------------------------------------------------------------




const movie ={
    actor : "vijay",
    music: "Arr",
    director : "Atlee",
    producer: "Lyca"
};
console.log(Object.keys(movie));    // (4) ['actor', 'music', 'director', 'producer']
console.log(Object.values(movie));  // (4) ['vijay', 'Arr', 'Atlee', 'Lyca']

for (let job in movie){
   // console.log(movie[job]);     //output one by one ah print aagum , vijay  Arr  Atlee  Lyca 
   // console.log(job);             //output one by one ah print aagum , actor music director producer

    console.log(`${job} , it's ${movie[job]}`);

    /* output is :
    actor , it's vijay
     music , it's Arr
     director , it's Atlee
     producer , it's Lyca
  */
     }            
     
     


//----------------------------------------------------------------------------------------------------------------------------------


//destructing the objects

const {music : favMusicDirector} = movie;
console.log(favMusicDirector);                    // Arr

const { director : favDirector} = movie;
console.log(favDirector);                       //Atlee



const{ music : favMusicDirectors , director: favDirectors} = movie;
console.log(favDirectors,favMusicDirectors);               // Atlee Arr



const{ music : FavMusicDirector , director: FavDirectors ,producer : FavProducers , actor : favActor} = movie;
console.log(favDirectors,favMusicDirectors,favActor,FavProducers);             //   Atlee Arr vijay Lyca
