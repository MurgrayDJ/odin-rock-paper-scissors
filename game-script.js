function getComputerChoice(){
    let randInt = Math.floor(Math.random() * 3);

    switch(randInt){
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    }
}

