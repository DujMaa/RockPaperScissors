let signs = ["rock", "paper", "scissors"]

let randNum = Math.floor(Math.random() * 3); 


function getComputerChoice(){
    return signs[randNum];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection == "paper")
            return `You Lose! Paper beats Rock`;
        else if(computerSelection == "scissors")
                return `You Win! Rock beats Scissors`;
        else if(computerSelection == "rock")
                return `It is Draw!`;
    }else if(playerSelection.toLowerCase() == "paper"){
        if(computerSelection == "paper")
            return `It is Draw!`;
        else if(computerSelection == "scissors")
                return `You Lose! Scissors beats Paper`;
        else if(computerSelection == "rock")
                return `You Win! Paper beats Rock`;
    }else if(playerSelection.toLowerCase() == "scissors"){
        if(computerSelection == "paper")
            return `You Win! Scissors beats Paper`;
        else if(computerSelection == "scissors")
                return `It is Draw!`;
        else if(computerSelection == "rock")
                return "You Lose! Rock beats Scissors";
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log("computer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));

