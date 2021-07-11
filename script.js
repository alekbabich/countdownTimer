const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const initialDateElement = document.getElementById("input-date");

var desiredDate = prompt("Please enter a date to countdown to", "01 Jan 2022");

function countdown() {
  const newYearsDate = new Date(desiredDate);
  const currentDate = new Date();

  // 86400000 Milliseconds in a day
  const days = Math.floor((newYearsDate - currentDate) / 86400000);
  const hours = Math.floor(((newYearsDate - currentDate) % 86400000) / 3600000);
  const minutes = Math.floor(((newYearsDate - currentDate) % 3600000) / 60000);
  const seconds = Math.floor(((newYearsDate - currentDate) % 60000) / 1000);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
  initialDateElement.innerHTML = desiredDate;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
