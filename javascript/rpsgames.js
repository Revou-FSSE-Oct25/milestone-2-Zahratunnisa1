// Rock Paper Scissors Game Logic

const buttons = document.querySelectorAll("[data-choice]");
const resultText = document.getElementById("result");

const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");

const resetBtn = document.getElementById("resetBtn");

let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    playRound(playerChoice);
  });
});

resetBtn.addEventListener("click", resetGame);

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";

  switch (playerChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      result = "You win!";
      playerScore++;
      break;

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      result = "Computer wins!";
      computerScore++;
      break;

    default:
      result = "It's a draw!";
  }

  resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreText.textContent = 0;
  computerScoreText.textContent = 0;
  resultText.textContent = "";
}
