function computerPlay() {
    let computer = Math.random();
    return (computer >= 0.66) ? "rock"
         : (computer >= 0.33) ? "paper"
         : "scissors";
      
}

function playRound(playerSelection, computerSelection) {
    // let playerSelection = window.prompt("Rock Paper or Scissors?");
    // let player = playerSelection.toLowerCase();
    if ((playerSelection == "rock" && computerSelection == "paper")
    ||  (playerSelection == "paper" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerSelection == "rock")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((playerSelection == "rock" && computerSelection === "scissors")
    ||  (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You tied, both you and the computer picked ${computerSelection}`;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 1; i<=5; i++) {
        let playerSelection = window.prompt("Rock Paper or Scissors?");
        let player = playerSelection.toLowerCase(); 
        if ((player == "rock") || (player == "paper") || (player == "scissors")) {
            let result = playRound(player, computerPlay());
            console.log(result)
            if (result.includes("win!")) {
                playerWins++;
            } else if (result.includes("Lose")) {
                computerWins++;
            } else {
                playerWins ++;
                computerWins++;
            }
        } else {
            alert("Please input correct input. Try again");
        }
        
    }
    console.log(`Player Wins = ${playerWins} and Computer Wins = ${computerWins}`)
}

game();