let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let laps = document.getElementById("laps");

function updateTimer() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

  display.innerText = `${h}:${m}:${s}:${ms}`;
}

function start() {
  if (interval) return;
  interval = setInterval(updateTimer, 10);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  clearInterval(interval);
  interval = null;
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  display.innerText = "00:00:00:000";
  laps.innerHTML = "";
}

function lap() {
  const li = document.createElement("li");
  li.innerText = display.innerText;
  laps.appendChild(li);
}