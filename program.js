function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = determineWinner(
    playerSelection.toLowerCase(),
    computerSelection.toLowerCase()
  );

  const resultElement = document.getElementById("result");
  resultElement.textContent = result;

  updateScore(result);
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "You Win! " + playerChoice + " beats " + computerChoice;
  } else {
    return "You Lose! " + computerChoice + " beats " + playerChoice;
  }
}

function updateScore(result) {
  const playerScoreElement = document.getElementById("player-score");
  const computerScoreElement = document.getElementById("computer-score");

  if (result.includes("Win")) {
    playerScore++;
  } else if (result.includes("Lose")) {
    computerScore++;
  }

  playerScoreElement.textContent = "Player: " + playerScore;
  computerScoreElement.textContent = "Computer: " + computerScore;

  if (playerScore === 5 || computerScore === 5) {
    setTimeout(showGameResult, 500);
  }
}

function showGameResult() {
  const resultElement = document.getElementById("result");
  if (playerScore > computerScore) {
    resultElement.textContent = "Congratulations! You win the game!";
  } else if (playerScore < computerScore) {
    resultElement.textContent = "Sorry, you lose the game.";
  } else {
    resultElement.textContent = "It's a tie! No one wins.";
  }

  // Reset the scores after the game is over
  playerScore = 0;
  computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;
