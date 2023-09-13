let signs = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resetBtn = document.querySelector("#resetBtn");

let scorePlayerDisp = document.querySelector(".scorePlayerDisp");
let gameRes = document.querySelector(".gameRes");
let scoreComputerDisp = document.querySelector(".scoreComputerDisp");
const endgame = document.querySelector(".endgame");
const overlay = document.querySelector(".overlay");

function getComputerChoice() {
  return signs[Math.floor(Math.random() * 3)];
}

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let computerSelection = getComputerChoice();
    let playerSelection = e.target.innerText;
    console.log(playRound(playerSelection, computerSelection));
    updateScore();
    winner();
  });
});

resetBtn.addEventListener("click", restartGame);

function updateScore() {
  scorePlayerDisp.innerText = playerScore;
  scoreComputerDisp.innerText = computerScore;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == "rock") {
    if (computerSelection == "paper") {
      computerScore++;
      gameRes.innerText = `You Lose! Paper beats Rock`;
    } else if (computerSelection == "scissors") {
      playerScore++;
      gameRes.innerText = `You Win! Rock beats Scissors`;
    } else if (computerSelection == "rock") gameRes.innerText = `It is Draw!`;
  } else if (playerSelection.toLowerCase() == "paper") {
    if (computerSelection == "paper") gameRes.innerText = `It is Draw!`;
    else if (computerSelection == "scissors") {
      computerScore++;
      gameRes.innerText = `You Lose! Scissors beats Paper`;
    } else if (computerSelection == "rock") {
      playerScore++;
      gameRes.innerText = `You Win! Paper beats Rock`;
    }
  } else if (playerSelection.toLowerCase() == "scissors") {
    if (computerSelection == "paper") {
      playerScore++;
      gameRes.innerText = `You Win! Scissors beats Paper`;
    } else if (computerSelection == "scissors")
      gameRes.innerText = `It is Draw!`;
    else if (computerSelection == "rock") {
      computerScore++;
      gameRes.innerText = "You Lose! Rock beats Scissors";
    }
  }
}

function winner() {
  if (playerScore == 5) {
    endgame.classList.add("active");
    overlay.classList.add("active");
    endgame.firstElementChild.innerText = "You won...";
  } else if (computerScore === 5) {
    endgame.classList.add("active");
    overlay.classList.add("active");
    endgame.firstElementChild.innerText = "You lost...";
  }
}

function restartGame() {
  gameRes.innerText = "";
  playerScore = 0;
  computerScore = 0;
  updateScore();
  endgame.classList.remove("active");
  overlay.classList.remove("active");
}
