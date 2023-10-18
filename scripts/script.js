
    console.log("Display some text")

    function getComputerChoice() {
        let computerChoiceHolder = 0;

        computerChoiceHolder = Math.floor(Math.random() * 3) + 1;

        switch(computerChoiceHolder) {
            case 1 : return "Rock";
                     break;

            case 2 : return "Paper";
                     break;

            case 3 : return "Scissor";
                     break;

            default : return null;
        }
    }

    