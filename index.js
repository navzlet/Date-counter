const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// console.log(11 - date.getMonth());
// seconds.textContent =
const countDate = function () {
  const currentDate = new Date();
  const dayCountTo = `1 Jan ${currentDate.getFullYear() + 1}`;
  const futureDate = new Date(dayCountTo);

  const remSeconds = (futureDate - currentDate) / 1000;
  const remDays = Math.floor(remSeconds / 3600 / 24);
  const remHours = Math.floor((remSeconds / 3600) % 24);
  const remMinutes = Math.floor((remSeconds / 60) % 60);
  const remSecondsAll = Math.floor(remSeconds) % 60;

  seconds.textContent = remSecondsAll;
  days.textContent = remDays;
  hours.textContent = remHours;
  minutes.textContent = remMinutes;
};

countDate();
setInterval(countDate, 1000);
