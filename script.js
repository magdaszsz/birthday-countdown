const btn = document.querySelector('button');
const msgDiv = document.querySelector('.message-container');
const msg = document.querySelector('#message');
const form = document.querySelector('#form');
const pas1 = document.querySelector('.password1');
const pas2 = document.querySelector('password2');

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

function updateCountdown(e) {
  e.preventDefault();
  countdownDate = e.srcElement[0].value;
  console.log(countdownDate)
}

formCountdown.addEventListener("submit", updateCountdown);

