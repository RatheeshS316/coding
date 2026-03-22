  //-----------USER INPUTS-------------------



// alert() , it is used to popup a message in a website
    let message1 = alert("welcome to the site");
    console.log(message1);



// confirm()  shows a dialog with OK and Cancel, returning `true` if OK is clicked, and `false` if Cancel is clicked.**
    let message2 = confirm("are you my friend ");  // ok === true  cancel === false
    console.log(message2);



// prompt();   The prompt() function in JavaScript is a built-in method used to get input from the user through a small popup dialog box in the browser.
  //  let message3 = prompt("what is your name?");
  //     console.log(message3);  
  
    //prompt la  null vandha enna panradhu
   let message3 = prompt("what is your name?");
     console.log(message3 ?? "you didn't enter your name");

     // prompt la empty aah "ok" sonna adu namba empty string nu solluvaga ,andhamari varama irukuradhuku enna panradhu
    // let message4 = prompt("what is your name?");
    //    if (message4){
    //     (message4);
    //    }
    //    else{
    //     console.log("you didn't enter your name");
    //    }
    //   console.log(message4);



    //   let m1 = "nufdur      ";
    //   console.log(m1.length);     // output is 12

    //   let message = "rateeesh                 ";
    // console.log(message.trim().length);                // ouput is 8    