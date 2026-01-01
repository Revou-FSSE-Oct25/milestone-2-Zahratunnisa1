// ================================
// Rock Paper Scissors Game
// ================================

// ---------- Game State ----------
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

// ---------- DOM Elements ----------
const buttons = document.querySelectorAll("[data-choice]");
const resultText = document.getElementById("result");
const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");
const resetBtn = document.getElementById("resetBtn");

// ---------- Utility Functions ----------

// Generate random choice for computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// ---------- Game Logic Functions ----------

// Determine winner using switch statement
function determineWinner(playerChoice, computerChoice) {
  let result = "";

  switch (playerChoice) {
    case "rock":
      result =
        computerChoice === "scissors"
          ? "You win!"
          : computerChoice === "paper"
          ? "Computer wins!"
          : "It's a draw!";
      break;

    case "paper":
      result =
        computerChoice === "rock"
          ? "You win!"
          : computerChoice === "scissors"
          ? "Computer wins!"
          : "It's a draw!";
      break;

    case "scissors":
      result =
        computerChoice === "paper"
          ? "You win!"
          : computerChoice === "rock"
          ? "Computer wins!"
          : "It's a draw!";
      break;
  }

  return result;
}

// Play one round of the game
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  updateScore(result);
  updateUI(playerChoice, computerChoice, result);
}

// ---------- UI Update Functions ----------

// Update player and computer scores
function updateScore(result) {
  if (result === "You win!") {
    playerScore++;
  } else if (result === "Computer wins!") {
    computerScore++;
  }

  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

// Update result message on screen
function updateUI(playerChoice, computerChoice, result) {
  resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

// ---------- Event Handlers ----------

// Handle player choice click
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    playRound(playerChoice);
  });
});

// Reset game to initial state
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreText.textContent = 0;
  computerScoreText.textContent = 0;
  resultText.textContent = "";
}
