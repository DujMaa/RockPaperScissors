let signs = ["Rock", "Paper", "Scissors"]

let randNum = Math.floor(Math.random() * 3); 

function getComputerChoice(){
    console.log(signs[randNum]);
}

getComputerChoice();