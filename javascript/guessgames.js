// ================================
// Number Guessing Game
// ================================

// ---------- Game State ----------
let secretNumber;
let attemptsLeft;

// ---------- DOM Elements ----------
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

// ---------- Utility Functions ----------

// Generate random number between 1 and 100
function generateSecretNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// ---------- Game Logic Functions ----------

// Initialize or reset game state
function initGame() {
  secretNumber = generateSecretNumber();
  attemptsLeft = 5;

  attemptsText.textContent = attemptsLeft;
  message.textContent = "";
  guessInput.value = "";

  guessBtn.disabled = false;
  guessInput.disabled = false;
}

// Determine guess result category
function evaluateGuess(userGuess) {
  if (userGuess === secretNumber) return "correct";
  if (userGuess > secretNumber) return "high";
  return "low";
}

// Handle game flow after a guess
function processGuess(resultType) {
  switch (resultType) {
    case "correct":
      message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
      endGame();
      break;

    case "high":
      message.textContent = "Too high!";
      break;

    case "low":
      message.textContent = "Too low!";
      break;
  }
}

// ---------- Event Handlers ----------

// Handle user guess button click
function handleGuess() {
  const userGuess = Number(guessInput.value);

  // Validate input
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attemptsLeft--;
  attemptsText.textContent = attemptsLeft;

  const resultType = evaluateGuess(userGuess);
  processGuess(resultType);

  // Check game over condition
  if (attemptsLeft === 0 && resultType !== "correct") {
    message.textContent = `Game Over! The number was ${secretNumber}.`;
    endGame();
  }

  guessInput.value = "";
}

// Disable input when game ends
function endGame() {
  guessBtn.disabled = true;
  guessInput.disabled = true;
}

// ---------- Event Listeners ----------
guessBtn.addEventListener("click", handleGuess);
restartBtn.addEventListener("click", initGame);

// ---------- Initialize Game ----------
initGame();
