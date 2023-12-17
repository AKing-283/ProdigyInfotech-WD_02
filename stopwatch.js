let stopwatchInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 1000);
  document.getElementById("startBtn").disabled = true;
  document.getElementById("stopBtn").disabled = false;
  document.getElementById("resetBtn").disabled = false;
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
  document.getElementById("resetBtn").disabled = false;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
  document.getElementById("resetBtn").disabled = true;
}

function updateStopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}
