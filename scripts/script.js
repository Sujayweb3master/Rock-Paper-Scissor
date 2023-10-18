
    console.log("Display some text")

    function getComputerChoice() {
        let computerChoiceHolder = 0;

        computerChoiceHolder = Math.floor(Math.random() * 3) + 1;

        switch(computerChoiceHolder) {
            case 1 : return "rock";
                     break;

            case 2 : return "paper";
                     break;

            case 3 : return "scissor";
                     break;

            default : return null;
        }
    }

