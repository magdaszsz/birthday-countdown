const daysUi = document.querySelector(".countdown__days > .number");
const hoursUi = document.querySelector(".countdown__hours > .number");
const minutesUi = document.querySelector(".countdown__minutes > .number");
const secondsUi = document.querySelector(".countdown__seconds > .number");
const numbersDiv = document.querySelector('.countdown__numbers-container');
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

  daysUi.textContent = `${days}`;
  hoursUi.textContent = `${hours}`;
  minutesUi.textContent = `${minutes}`;
  secondsUi.textContent = `${seconds}`;
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
    calculateDifference();
    startCountdown = setInterval(calculateDifference, 1000);
    numbersDiv.style.display = "grid";
    formCountdown.style.display = "none";
  }
}

function hideUI() {

    numbersDiv.style.display = "none";
   formCountdown.style.display = "grid";
}

formCountdown.addEventListener("submit", updateCountdown);
stopBtn.addEventListener("click", function () {
  clearInterval(startCountdown);
  hideUI();

});
