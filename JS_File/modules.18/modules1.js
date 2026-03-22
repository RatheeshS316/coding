//         //                    //Modules
                    
      

        // const earnMoney = () =>{
        //     return "Earn Money by Learning High Demand Skills"
        // };

        // const growMoney = () =>{
        //     return "Grow Money By investing!"
        // }

        // const giveMoney = () => {
        //     return "Give Money for education purposes"
        // }

        // export default earnMoney;
        // export { growMoney , giveMoney };



// //---------------------- OR ---------------------------------------------------------------------------------------------------------------

        //  export default function earnMoney1(){
        //     return "Earn Money by Learning High Demand Skills";
        // };

        // export const growMoney1 = () =>{
        //     return "Grow Money By investing!";
        // };
        // export const giveMoney1 = () => {
        //     return "Give Money for education purposes";
        // };

// //----------------------------------------------------------------------------------------------------------------------------------------

export default class subscriber {
    constructor(name){
        this.name = name ;
    }
    emailme(){
        return `Hi I am ${this.name}. I emailed to contactratheesh@gmail.com`
    }
}