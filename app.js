let signs = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

let scorePlayerDisp = document.querySelector(".scorePlayerDisp");
let scoreComputerDisp = document.querySelector(".scoreComputerDisp");

function getComputerChoice() {
  return signs[Math.floor(Math.random() * 3)];
}

rockBtn.addEventListener("click", () => {});

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let computerSelection = getComputerChoice();
    let playerSelection = e.target.innerText;
    console.log(playRound(playerSelection, computerSelection));
    console.log(`${computerSelection} VS ${playerSelection}`);
  });
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == "paper") {
      computerScore++;
      return `You Lose! Paper beats Rock`;
    } else if (computerSelection == "scissors") {
      playerScore++;
      return `You Win! Rock beats Scissors`;
    } else if (computerSelection == "rock") return `It is Draw!`;
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == "paper") return `It is Draw!`;
    else if (computerSelection == "scissors") {
      computerScore++;
      return `You Lose! Scissors beats Paper`;
    } else if (computerSelection == "rock") {
      playerScore++;
      return `You Win! Paper beats Rock`;
    }
  } else if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection == "paper") {
      playerScore++;
      return `You Win! Scissors beats Paper`;
    } else if (computerSelection == "scissors") return `It is Draw!`;
    else if (computerSelection == "rock") {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    }
  }
}

function game() {
  // for(let i = 0; i < 5; i++){
  //
  //     playerSelection = prompt("Rock  Paper  Scissors")
  //     console.log()
  // }
  if (playerScore > computerScore) {
    console.log("YOU WON");
  } else if (computerScore > playerScore) console.log("YOU LOST!");
  else console.log("IT IS TIE");
}

game();
