    // rock paper scisssors

    let playGame = confirm("shall we play rock paper scissors");
        if (playGame){                       // if-1
        //play
        let playerChoice = prompt ("please enter rock, paper, scissors");
        if(playerChoice){                    // if-2
        let playerOne = playerChoice.trim().toLowerCase();
        if(                                  // if-3
            playerOne === "rock"  ||
            playerOne === "paper" ||
            playerOne ===  "scissors"
        ){
            let computerChoice = Math.floor(Math.random()*3 + 1);
            let computer = 
            computerChoice === 1 ? "rock":
            computerChoice === 2 ? "paper" :
            " scissors";
            
            let result =
            playerOne === computer ? "Tie game !" :
            playerOne === "rock"  && computer === "paper"? `playerOne : ${playerOne}\ncomputer: ${computer}\n Computer wins`
            :playerOne === "paper"  && computer === " scissors" ? `playerOne : ${playerOne}\ncomputer:${computer}\n computer wins`
            : playerOne === "scissors"  && computer === " rock" ? `playerOne : ${playerOne}\ncomputer:${computer}\n computer wins`
            : `${playerOne}\ncomputer:${computer}\n computer wins`;
            alert(result);
            let playAgain = confirm("play Again");
            playAgain ? location .reload():alert(" ok , thanks for playing");
        }
        else{                                   // if-3
            alert("you didn't enter rock paper scissors ");
        }
        }else{                                  // if-2
            alert("i guess you changed your mind ,maybe next time");
        }
    }
    else{
        alert("ok,maybe next time");            //if-1
    }