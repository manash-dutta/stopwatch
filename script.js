const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let intervalId;
// Function to update the timer display
function updateDisplay() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timerEl.textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  updateDisplay();
}

// Adding Event listeners on the buttons
startBtn.addEventListener("click", () => {
  // Checking if timer is already running
  if (!intervalId) {
    startTimer();
  }
});

stopBtn.addEventListener("click", stopTimer);

resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
