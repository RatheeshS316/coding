                            // CLASSES
 
/*
  class Class_name{
           constructor(){
           this.keyvalue=value1;
           .......
           }                 
  function(){
  }
 }   */



  
        // this is a object.
const myPizzaa = {
    size : "medium",
    crust : "original",
    bake : function(){
        return console.log(`baking a  ${this.size} ${this.crust} crust pizza.`);     //baking a  medium original crust pizza.
    }
};                                                   // function la irundhu veli values declare pannanum na apa  " this . " pottu write pannanum

myPizzaa.bake();   // why inga console.log() podalana adu already return function la iruku 

  








                 //idha class aah write pannanum

                // classes
    class Pizza {
        constructor(){
            this.size = "medium";
            this.crust = "original";
        }
        bake(){
            return console.log( `baking a  ${this.size} ${this.crust} crust pizza.`)
        }
    }

    const anotherPizza = new Pizza();   // without parameters
    console.log(anotherPizza.size);                     // medium
    anotherPizza.bake();                                // baking a  medium original crust pizza.


                                   
    
    
    
    
                                    //with parameter
    class Piza {
        constructor(sizePizza){
            this.size = sizePizza;
            this.crust = "original";
        }
        bake(){
            return console.log( `baking a  ${this.size} ${this.crust} crust pizza.`);   // baking a  medium original crust pizza.
        }
    }

    const AnotherPizza = new Piza("medium");             
    // with parameters
   
    console.log(AnotherPizza.size);                     // medium
    AnotherPizza.bake();                                // baking a  medium original crust pizza.




             // correct method idhu tha because namba value epavumae fixed tha podakoodathu
          class Pizzza1 {
            constructor(typepizza,crustpizza){
                this.type=typepizza;
                this.crust=crustpizza;
                this.toppings="olives";
            }
            bake(){
                return console.log(`baking a  ${this.size} ${this.crust} ${this.toppings} crust pizza`);
            }
          }   
        const anotherPizzza = new Pizzza1("small","egg");
        anotherPizzza.bake();
          const anotherPizzza1 = new Pizzza1("big","chicken");
        anotherPizzza.bake();  



   

//-------------------------------------------------------------------------------------------------------------------------------------------
                                 


                    //  immediate value aah change panradhu but it is a wrong method

          class Pizzzza {
            constructor(typepizza,crustpizza){
                this.type=typepizza;
                this.crust=crustpizza;
                this.toppings="olives";
            }
            bake(){
                return console.log(`baking a  ${this.size} ${this.crust} ${this.toppings} crust pizza`);
            }  //baking a  undefined egg olives crust pizza
          }   
        const anotherPizzzza = new Pizzzza("small","egg");
        anotherPizzzza.bake();  
        anotherPizzzza.toppings = "sausage";     // it is a wrong pratice , dont do this use getter setter
        
        anotherPizzzza.bake();            //baking a  undefined egg sausage crust pizza

 
//-----------------------------------------------------------------------------------------------------------------------------------------------------

              // objects using getter and setter method , it is a correct method.

      
          class Pizzzza {
            constructor(typepizza,crustpizza){
                this.type=typepizza;
                this.crust=crustpizza;
                this.toppings="olives";
            }
            get toppingsPizza(){
                return this.toppings;
            }
            set toppingsPizza(toppingsPizza){
                this.toppings = toppingsPizza;
                }
            bake(){
                return console.log(`baking a  ${this.size} ${this.crust} ${this.toppings} crust pizza`);
            }  //baking a  undefined egg olives crust pizza
          }   
        const anotherPizzzza = new Pizzzza("small","egg");
        anotherPizzzza.bake();  
        anotherPizzzza.toppingsPizza = "sausage";     
        anotherPizzzza.bake();           


        // another method

         class Pizzzzaa {
            constructor(sizepizza,crustpizza){
                this.size=sizepizza;
                this.crust=crustpizza;
                this.toppings="olives";
            }
            getToppings(){
                return this.toppings;
            }
            setToppings(toppingsPizza){
                this.toppings = toppingsPizza;    // indha toppingspizza oru value na ok but array na set aagadhu adha namba next papaom
                }
            bake(){
                return console.log(`baking a  ${this.size} ${this.crust} ${this.toppings} crust pizza`);
            }  //baking a  small egg olives crust pizza
          }   
        const anotherPizzzza = new Pizzzzaa("small","egg");
        anotherPizzzza.bake();                                   //baking a  small egg olives crust pizza
        anotherPizzzza.setToppings("sausage");    
        anotherPizzzza.bake();                              // baking a  small egg sausage crust pizza
        console.log(anotherPizzzza.getToppings());         // sausage
   
        // // settoppings value upgrade pannum
        // // gettoppings value get pannum

//----------------------------------------------------------------------------------------------------------------------------------------


        // array vandha  enna panradhu nu papom
        // array vandha add pannanum like menu card
 

// example 
       class myPizza1 {
        constructor(defaultTopping){
            this.topping= [defaultTopping];
            this.size = "small";
        }
        getToppings(){
            return this.topping;
        }
        setToppings(toppingsPizza){
            this.topping.push(toppingsPizza);
        }
        bake(){
            return console.log(`bake a pizza ${this.size} and the flavour ${this.topping}`);
        }
       }
       const customer1 = new myPizza1("egg");
       customer1.bake();                                     //bake a pizza small and the flavour egg
        const customer2 = new myPizza1("mushroom");
       customer2.bake();                                     // bake a pizza small and the flavour mushroom
        const customer3 = new myPizza1("olives");
       customer3.bake();                                     // bake a pizza small and the flavour olives
       customer1.setToppings("cheese");
       customer1.setToppings("onion");
       customer1.bake();                       //bake a pizza small and the flavour egg,cheese,onion
       console.log(customer1.getToppings());   //(3) ['egg', 'cheese', 'onion']

     

// own example
            class vehicle{
                constructor(defaultCarName){
                    this.type="car";
                    this.run= " diesel";
                    this.name=[defaultCarName];
                }
                        getName(){
                            return this.name;
                        }
                        setName(companyCarName){
                            this.name.push(companyCarName);
                        }
                details(){
                    return console.log( `this vehicle is ${this.type} and it runs in ${this.run} and the company name is ${this.name}`);
                }
            }
            
             const cus1 = new vehicle("Audi");
             cus1.setName("BMW");
             cus1.setName("ferrari");
             console.log(cus1.getName());            //(3) ['Audi', 'BMW', 'ferrari']
             cus1.details();                          //this vehicle is car and it runs in  diesel and the company name is Audi,BMW,ferrari



//---------------------------------------------------------------------------------------------------------------------------------------------


                                     //inheritance 

                class Parent{
                    constructor(functionparent){
                        this.genes= true;
                        this.legs="two";
                        this.hands="two";
                        this.function=functionparent;
                    }
                    getfunction(){
                        return this.function;
                    }
                    setfunction(parentFunction){
                        this.function = parentFunction;
                    }
                }                 
                   class child1 extends Parent {
                    constructor(functionparent){
                        super(functionparent);
                        this.gender="M"
                    }
                     control(){
                        return  console.log( `our parent genes comes ${this.genes} and we have ${this.hands} and ${this.legs} in this ${this.function}`);
                    }
                  
                }

                const child = new child1("walking lifting");
                child.control();                            //our parent genes comes true and we have two and two in this walking lifting




//--------------------------------------------------------------------------------------------------------------------------------------------
                                        // private property
                    class Parent1{
                    constructor(functionparent){
                        this._genes= true;                                      // code 278,279,280,281,284, it is a private property
                        this._legs="two";                                       //   ._ is a private property
                        this._hands="two";
                        this._function=functionparent;
                    }
                    getfunction(){
                        return this._function;
                    }
                    setfunction(parentFunction){
                        this.function = parentFunction;
                    }
                }          

//-------------------------------------------------------------------------------------------------------------------------------------------

                  //factory function : indha function use pannni objects create pannalam

     // normal function.
     function pizzaFactory(sizePizza){
        const crust = "original";
        const size = sizePizza;
        return{
            bake:() =>console.log(`baking a ${size} ${crust} crust pizza `)
        };

     }

     // classes with private property
     const myPizza = pizzaFactory("small");
     myPizza.bake();                                 //baking a small original crust pizza 
     console.log(myPizza.crust);                     // undefined
   -//---------------------------------------




   
     class piza {
            crustt = "original";           // public property
            #sauce = "tomato";             // private property
        constructor(sizecrust){
            
            this.size = sizepizza;
            
        }
        getcrust(){
            return this.crust;
        }
        setcrust(crustpizza){
            this.crust = crustpizza;
        }
        bake(){
            return console.log(`baking a ${this.size} ${this.crust} ${this.#sauce}`);
        }
     }

 const mizza = new piza("small");
 mizza.bake();
console.log(mizza.crust)



                 