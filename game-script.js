//Author: Murgray D. John
//Date: 8/16/2022
//UI update: 9/13/2022
//Purpose: To play 5 rounds of rock, paper, scissors



//Event listeners for play buttons
const buttons = document.querySelectorAll(".play-btn"); //Nodelist of items with class "play-btn"
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        game(playerSelection);
    })
});

let userWins = 0;
let computerWins = 0;
let ties = 0;

//Plays five rounds of rock paper scissors. Keeps track of player wins, computer wins,
//and ties
const currentResults = document.getElementById("running-totals");
const userWinsCell = document.getElementById("user-wins-cell");
const computerWinsCell = document.getElementById("computer-wins-cell");
const tiesCell = document.getElementById("ties-cell");
function game(playerSelection){
    let currentWinner;
    
    if(userWins < 5 && computerWins < 5){

        currentWinner = playRound(playerSelection, getComputerChoice());

        //Increments each tally based on winner or tie
        if(currentWinner === 'user'){
            userWins++;
        }
        else if (currentWinner === 'computer'){
            computerWins++;
        }
        else{
            ties++;
        }

        //Update win values
        userWinsCell.textContent = userWins;
        computerWinsCell.textContent = computerWins;
        tiesCell.textContent = ties;

        if(userWins === 5 || computerWins === 5){
            announceWinner(userWins, computerWins);
        }
    }

}

//Plays one round, returns whether it's a tie, win for computer, or win for user
function playRound(playerSelection, computerSelection) {
    const pS = playerSelection;
    const cS = computerSelection;
    const resultMsg = document.getElementById("current-round");

    if(pS === cS){
        resultMsg.textContent = "It's a tie!";
        return 'tie';
    }
    else if(pS === "rock" && cS === "paper" ||
            pS === "paper" && cS === "scissors" ||
            pS === "scissors" && cS === "rock"){
        
        resultMsg.textContent = `You lose! ${cS} beats ${pS}!`;
        return 'computer';
    }
    else{
        resultMsg.textContent = `You win! ${pS} beats ${cS}!`;
        return 'user';
    }
}

//Gets the computer to randomly choose an int representing rock, paper, or scissors
function getComputerChoice(){
    let randInt = Math.floor(Math.random() * 3);

    switch(randInt){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

//Prints out win information, checks who won the most rounds
const winner = document.getElementById("winner");
function announceWinner(userWins, computerWins){

    if(userWins > computerWins){
        winner.textContent = `Congratulations, you won!`;
    }
    else{
        winner.textContent = 'The computer won! Better luck next time!';
    }
}


const restartBtn = document.getElementById('reset-btn')
restartBtn.addEventListener('click', () => {
    restartGame();
});

const currentRound = document.getElementById('current-round');
function restartGame(){

    currentRound.textContent = 'Click one of the buttons above to start playing!';
    currentResults.textContent = '';
    winner.textContent = '';

    userWins = 0;
    computerWins = 0;
    ties = 0;
}