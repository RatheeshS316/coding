                  
                  // ipdi kuda declare pannalam
    
    // method1:
        //     import earnMoney1  from "./modules1.js";
        //     import {growMoney1 , giveMoney1} from "./modules1.js";
        //     console.log(earnMoney1());                                 //Earn Money by Learning High Demand Skills
        //     console.log(growMoney1());                                 //Grow Money By investing!
        //     console.log(giveMoney1());                                 //Give Money for education purposes

    


//             // or 

//     // method2:
        //     import earnMoney1 from "./modules1.js";
        //     import { growMoney1 as grow ,giveMoney1 as give} from "./modules1.js"; 
        //     console.log(earnMoney1());                          //Earn Money by Learning High Demand Skills
        //     console.log(grow());                               //Grow Money By investing!
        //     console.log(give());                               //Give Money for education purposes


//                 //or 

//     // method3   idhu universal aah declare panum
//             import * as dh  from "./modules1.js";
//             console.log(dh.earnMoney());              //Earn Money by Learning High Demand Skills
//             console.log(dh.growMoney());              //Grow Money By investing!
//             console.log(dh.giveMoney());              //Give Money for education purposes

// //-------------------------------------------------------------------------------------------------------------------

import subscribr from "./modules1.js";
const me = new subscribr("Rath");
console.log(me.emailme());                     // Hi I am Rath . I emailed to contactratheesh@gmail.com