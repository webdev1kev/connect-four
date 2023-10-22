let timer = document.querySelector(".seconds");
let initialTimer = 30;
const interval = {};

timer.textContent = initialTimer;
interval.id = setInterval(function () {
  initialTimer--;
  timer.textContent = initialTimer;
  if (initialTimer === 0) {
    clearInterval(interval.id);
  }
}, 1000);
