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

const makeButtonGrid = () => {
  const gameBoard = document.querySelector(".board");
  const buttonGrid = gameBoard.appendChild(document.createElement("div"));
  buttonGrid.classList.add("button-grid");
  for (let i = 0; i < 42; i++) {
    const buttonElement = document.createElement("button");
    buttonElement.addEventListener("click", () => {
      console.log(`button clicked ${i}`);
    });
    buttonGrid.appendChild(buttonElement);
  }

  console.log(gameBoard);
};
makeButtonGrid();
