const btn = document.querySelector('button');
const msgDiv = document.querySelector('.message-container');
const msg = document.querySelector('#message');
const form = document.querySelector('#form');
const pas1 = document.querySelector('.password1');
const pas2 = document.querySelector('password2');
const daysUi = document.querySelector('.countdown__days');
const hoursUi = document.querySelector('.countdown__hours');
const minutesUi = document.querySelector('.countdown__minutes');
const secondsUi = document.querySelector('.countdown__seconds');

let isValid = false;

const validateForm = () => {
  isValid = form.checkValidity();
  if(!isValid) {
    msg.innerText = "Please fill out the form";
    msgDiv.style.borderColor = "red";
  }
}
const submitForm = (e) => {
  e.preventDefault();
  validateForm();
}

form.addEventListener('submit', submitForm)

// countdown

const dateElement = document.querySelector(".date");
const formCountdown = document.querySelector(".countdown__form");
const today = new Date().toISOString().split("T");

dateElement.setAttribute("min", today[0]);

let countdownDate = "";
let countdownValue = Date;

function calculateDifference() {
  const now = new Date().getTime();
  const difference = countdownValue - now;
  console.log(difference);
  const days = Math.floor( difference / day);
  const hours = Math.floor((difference % day) / hour);
  const minutes = Math.floor((difference % hour) / minute);
  const seconds = Math.floor((difference % minute) / second);
  console.log(days, hours, minutes, seconds)
  daysUi.textContent = days;
  hoursUi.textContent = hours;
  minutesUi.textContent = minutes;
  secondsUi.textContent = seconds;
}

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

function updateCountdown(e) {
  e.preventDefault();
  countdownDate = e.srcElement[0].value;
  // console.log(countdownDate)
  countdownValue = new Date(countdownDate).getTime();
  // console.log('countdownValue', countdownValue)
 setInterval(calculateDifference, 1000)
}

formCountdown.addEventListener("submit", updateCountdown);

