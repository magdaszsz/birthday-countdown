const daysUi = document.querySelector(".countdown__days");
const hoursUi = document.querySelector(".countdown__hours");
const minutesUi = document.querySelector(".countdown__minutes");
const secondsUi = document.querySelector(".countdown__seconds");
const numbersDiv = document.querySelector('.countdown__numbers');
// const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector(".stop-btn");

const dateElement = document.querySelector(".date");
const formCountdown = document.querySelector(".countdown__form");
const today = new Date().toISOString().split("T");

dateElement.setAttribute("min", today[0]);

let countdownDate = "";
let countdownValue;

function calculateDifference() {
  const now = new Date().getTime();
  const difference = countdownValue - now;
  const days = Math.floor(difference / day);
  const hours = Math.floor((difference % day) / hour);
  const minutes = Math.floor((difference % hour) / minute);
  const seconds = Math.floor((difference % minute) / second);

  daysUi.innerHTML = `${days}<br><span>days</span>`;
  hoursUi.innerHTML = `${hours}<br><span>hours</span>`;
  minutesUi.innerHTML = `${minutes}<br><span>minutes</span>`;
  secondsUi.innerHTML = `${seconds}<br><span>seconds</span>`;
}

let startCountdown;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function updateCountdown(e) {
  e.preventDefault();

  countdownDate = dateElement.value;
  if (countdownDate) {
    countdownValue = new Date(countdownDate).getTime();

    startCountdown = setInterval(calculateDifference, 1000);
    numbersDiv.style.display = "flex";
  }
}

function hideUI() {

    numbersDiv.style.display = "none";
 
}

formCountdown.addEventListener("submit", updateCountdown);
stopBtn.addEventListener("click", function () {
  clearInterval(startCountdown);
  hideUI();

});
