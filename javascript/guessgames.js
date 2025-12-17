// Number Guessing Game Logic

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

guessBtn.addEventListener("click", handleGuess);
restartBtn.addEventListener("click", resetGame);

function handleGuess() {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attemptsLeft--;
  attemptsText.textContent = attemptsLeft;

  if (userGuess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    endGame();
  } else if (userGuess > secretNumber) {
    message.textContent = "Too high!";
  } else {
    message.textContent = "Too low!";
  }

  if (attemptsLeft === 0 && userGuess !== secretNumber) {
    message.textContent = `Game Over! The number was ${secretNumber}.`;
    endGame();
  }

  guessInput.value = "";
}

function endGame() {
  guessBtn.disabled = true;
  guessInput.disabled = true;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 5;

  attemptsText.textContent = attemptsLeft;
  message.textContent = "";
  guessInput.value = "";

  guessBtn.disabled = false;
  guessInput.disabled = false;
}
