//Author: Murgray D. John
//Date: 8/16/2022
//UI update: 9/13/2022
//Purpose: To play 5 rounds of rock, paper, scissors

//Event listeners for buttons
const buttons = document.querySelectorAll(".btn"); //Nodelist of items with id "btn"
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        playRound(playerSelection, getComputerChoice());
    })
});


//Gets the computer to randomly choose an int representing rock, paper, or scissors
function getComputerChoice(){
    let randInt = Math.floor(Math.random() * 3);

    switch(randInt){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

//Plays one round, returns whether it's a tie, win for computer, or win for user
function playRound(playerSelection, computerSelection) {
    let pS = playerSelection.toLowerCase();
    let cS = computerSelection.toLowerCase();

    if(pS === cS){
        console.log("It's a tie!");
        return 'tie';
    }
    else if(pS === "rock" && cS === "paper" ||
            pS === "paper" && cS === "scissors" ||
            pS === "scissors" && cS === "rock"){
        
        console.log(`You lose! ${cS} beats ${pS}!`);
        return 'computer';
    }
    else{
        console.log(`You win! ${pS} beats ${cS}!`);
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


//Plays five rounds of rock paper scissors. Keeps track of player wins, computer wins,
//and ties
// function game(){
//     console.log("Let's play Rock, Paper, Scissors!");
//     let userWins = 0;
//     let computerWins = 0;
//     let ties = 0;
    
//     for(let i = 1; i < 6; i++){
//         console.log(`Round ${i}:`); 
//         let currentWinner = playRound(getUserChoice(), getComputerChoice());
//         if(currentWinner === 'user'){
//             userWins++;
//         }
//         else if (currentWinner === 'computer'){
//             computerWins++;
//         }
//         else{
//             ties++;
//         }
//     }

//     bestOfFive(userWins, computerWins, ties);
// }

// game();