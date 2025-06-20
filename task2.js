let startTime = 0;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

function formatTime(ms) {
  let date = new Date(ms);
  let minutes = String(date.getUTCMinutes()).padStart(2, '0');
  let seconds = String(date.getUTCSeconds()).padStart(2, '0');
  let milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${minutes}:${seconds}.${milliseconds}`;
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00.000";
  laps.innerHTML = '';
}

function addLap() {
  if (elapsedTime === 0) return;
  const lapTime = formatTime(elapsedTime);
  const li = document.createElement("li");
  li.textContent = `Lap ${laps.children.length + 1}: ${lapTime}`;
  laps.appendChild(li);
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", addLap);
