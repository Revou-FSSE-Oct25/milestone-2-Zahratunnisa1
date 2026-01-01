// ================================
// Clicker Game
// ================================

// ---------- Game State ----------
let score = 0;
let timeLeft = 10;
let timer = null;
let gameStatus = "idle"; 
// idle | running | finished

// ---------- DOM Elements ----------
const clickBtn = document.getElementById("clickBtn");
const startBtn = document.getElementById("startBtn");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const statusText = document.getElementById("status");

// ---------- Game Logic Functions ----------

// Initialize or reset game
function initGame() {
  score = 0;
  timeLeft = 10;
  gameStatus = "idle";

  scoreText.textContent = score;
  timeText.textContent = timeLeft;
  statusText.textContent = "";

  clickBtn.disabled = true;
  startBtn.disabled = false;
}

// Handle click scoring
function handleClick() {
  if (gameStatus !== "running") return;

  score++;
  scoreText.textContent = score;
}

// Start the game and timer
function startGame() {
  gameStatus = "running";
  clickBtn.disabled = false;
  startBtn.disabled = true;

  timer = setInterval(updateTimer, 1000);
}

// Update timer countdown
function updateTimer() {
  timeLeft--;
  timeText.textContent = timeLeft;

  if (timeLeft === 0) {
    endGame();
  }
}

// End game and show result
function endGame() {
  clearInterval(timer);
  gameStatus = "finished";

  updateGameStatus();
}

// Handle game status using switch statement
function updateGameStatus() {
  switch (gameStatus) {
    case "finished":
      clickBtn.disabled = true;
      startBtn.disabled = false;
      statusText.textContent = `⏰ Time's up! Your final score is ${score}.`;
      break;
  }
}

// ---------- Event Listeners ----------
clickBtn.addEventListener("click", handleClick);
startBtn.addEventListener("click", startGame);

// ---------- Initialize ----------
initGame();
