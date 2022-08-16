function getComputerChoice(){
    let randInt = Math.floor(Math.random() * 3);

    switch(randInt){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let pS = playerSelection.toLowerCase();
    let cS = computerSelection.toLowerCase();

    if(pS === cS){
        return "It's a tie!";
    }
    else if(pS === "rock" && cS === "paper" ||
            pS === "paper" && cS === "scissors" ||
            pS === "scissors" && cS === "rock"){
        
        return `You lose! ${cS} beats ${pS}!`;
    }
    else{
        return `You win! ${pS} beats ${cS}!`;
    }
}

