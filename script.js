// Get DOM elements
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Initialize seconds and intervalId variables
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
    localStorage.setItem("timer", seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
  localStorage.setItem("timer", seconds);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  localStorage.setItem("timer", seconds);
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

// Load the timer value from local storage when the page is loaded
window.addEventListener("load", () => {
  const storedTime = localStorage.getItem("timer");
  if (storedTime !== null) {
    seconds = parseInt(storedTime, 10);
    updateDisplay();
  }
});
