//Author: Murgray D. John
//Date: 8/16/2022
//UI update: 9/13/2022
//Purpose: To play 5 rounds of rock, paper, scissors


//Gets the computer to randomly choose an int representing rock, paper, or scissors
function getComputerChoice(){
    let randInt = Math.floor(Math.random() * 3);

    switch(randInt){
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

//Plays one round, returns whether it's a tie, win for computer, or win for user
function playRound(playerSelection, computerSelection) {
    const pS = playerSelection;
    const cS = computerSelection;
    const resultMsg = document.querySelector("#currentRound");

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

// //Prints out win information, checks who won the most rounds
// function bestOfFive(userWins, computerWins, ties){
//     console.log(`Player wins: ${userWins} Computer wins: ${computerWins} Ties: ${ties}`)
    
//     if(userWins > computerWins){
//         console.log(`Congrats, you beat the computer ${userWins} time(s). You won!`);
//     }
//     else if (userWins < computerWins){
//         console.log(`Aww, you only won ${userWins} time(s). Better luck next time!`);
//     }
//     else{
//         console.log("Wow it's a complete tie! Try to beat me next time!");
//     }
// }

//Event listeners for buttons
const buttons = document.querySelectorAll(".btn"); //Nodelist of items with id "btn"
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

        //Displays current totals
        const currentResults = document.querySelector("#runningTotals");
        currentResults.textContent = `User wins: ${userWins} 
                                    Computer wins: ${computerWins} 
                                    Ties: ${ties}`;
    }

    // bestOfFive(userWins, computerWins, ties);
}
