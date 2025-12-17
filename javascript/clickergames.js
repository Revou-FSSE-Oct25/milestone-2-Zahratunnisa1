// Clicker Game Logic

const clickBtn = document.getElementById("clickBtn");
const startBtn = document.getElementById("startBtn");

const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");
const statusText = document.getElementById("status");

let score = 0;
let timeLeft = 10;
let timer = null;
let gameRunning = false;

clickBtn.addEventListener("click", () => {
  if (!gameRunning) return;

  score++;
  scoreText.textContent = score;
});

startBtn.addEventListener("click", startGame);

function startGame() {
  score = 0;
  timeLeft = 10;

  scoreText.textContent = score;
  timeText.textContent = timeLeft;
  statusText.textContent = "";

  gameRunning = true;
  startBtn.disabled = true;

  timer = setInterval(() => {
    timeLeft--;
    timeText.textContent = timeLeft;

    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  gameRunning = false;
  startBtn.disabled = false;
  statusText.textContent = `⏰ Time's up! Your final score is ${score}.`;
}
