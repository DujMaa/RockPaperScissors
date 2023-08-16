let signs = ["rock", "paper", "scissors"]
let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    return signs[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection == "paper"){
            computerScore++;
            return `You Lose! Paper beats Rock`;
        }
        else if(computerSelection == "scissors"){
            playerScore++;
            return `You Win! Rock beats Scissors`;
        }
        else if(computerSelection == "rock")
                return `It is Draw!`;
    }else if(playerSelection.toLowerCase() == "paper"){
        if(computerSelection == "paper")
            return `It is Draw!`;
        else if(computerSelection == "scissors"){
            computerScore++;
            return `You Lose! Scissors beats Paper`;
        }
        else if(computerSelection == "rock"){
            playerScore++;
            return `You Win! Paper beats Rock`;
        }
    }else if(playerSelection.toLowerCase() == "scissors"){
        if(computerSelection == "paper"){
            playerScore++;
            return `You Win! Scissors beats Paper`;
        }  
        else if(computerSelection == "scissors")
                return `It is Draw!`;
        else if(computerSelection == "rock"){
            computerScore++;
            return "You Lose! Rock beats Scissors";
        }     
    }
}

function game(){
    let computerSelection;
    let playerSelection = "Rock";
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        playerSelection = prompt("Rock  Paper  Scissors")
        console.log(playRound(playerSelection, computerSelection))
    }
    if(playerScore > computerScore){
        console.log("YOU WON");
    }else if(computerScore > playerScore)
        console.log("YOU LOST!");
    else
    console.log("IT IS TIE");
}

game();


