
    function getComputerChoice() {
        // define a variable of integer type
        let computerChoiceHolder = 0;

        // assign random number between 1 - 3 to that variable
        computerChoiceHolder = Math.floor(Math.random() * 3) + 1;

        // conditional statement to return one of the three choices
        switch(computerChoiceHolder) {
            case 1 : return "rock";
                    //  break;

            case 2 : return "paper";
                    //  break;

            case 3 : return "scissor";
                    //  break;

            default : return null;
        }
    }

    function playRound(playerSelection, computerSelection) {
        
        const defaultValue = "OOOps, it's a tie.";

        switch(computerSelection) {
            case "rock": if (playerSelection === "scissor") return "You Lose! Rock beats Scissor";
                         else if (playerSelection === "paper") return "You Win! Paper beats Rock";
                         else return defaultValue;

            case "paper": if (playerSelection === "rock") return "You Lose! Paper beats Rock";
                          else if (playerSelection === "scissor") return "You Win! Scissor beats Paper";
                          else return defaultValue;

            case "scissor": if (playerSelection === "paper") return "You Lose! Scissor beats Paper";
                            else if (playerSelection === "rock") return "You Win! Rock beats Scissor";
                            else return defaultValue;

            default: return null;
                         
        }
    }


    // console.log(playRound(playerSelection, computerSelection));

    function game () {

        let computerWinCount = 0;
        let playerWinCount = 0;

        for (let i = 1; i <= 5; i++) {

            let holder = prompt("Input your choice:");
            let playerSelection = holder.toLowerCase();
            let computerSelection = getComputerChoice();
        
            // console.log(computerSelection);
            // console.log(playerSelection);
            
            // console.log(playRound(computerSelection, playerSelection));

            let resultOfOneRound = playRound(playerSelection, computerSelection);
            console.log(resultOfOneRound);

            if (resultOfOneRound.substring(0,7) === "You Win") playerWinCount++;
            else if (resultOfOneRound.substring(0,8) === "You Lose") computerWinCount++;
            else {
                playerWinCount++;
                computerWinCount++;
            }

            // console.log(playerWinCount);
            // console.log(computerWinCount);

        }

        console.log("Final Result:");

        if (playerWinCount === computerWinCount)  return "Match is tied!!";
        return (playerWinCount > computerWinCount) ? "Player is the Winner!!" : "Computer is the Winner!!";
        
    }

    console.log(game());    

    