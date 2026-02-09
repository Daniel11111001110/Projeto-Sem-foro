(function () {
  const img = document.querySelector("#img");
  const buttons = document.querySelectorAll(".btn");
  let interval = null;
  let count = 0;

  const changeColor = (event) => {
    stopInterval();
    turnOn[event.target.id]();
  };
  const nextINdex = () => (count = count < 2 ? ++count : 0);

  const color = () => {
    const colors = ["red", "yellow", "green"];
    const cor = colors[count];
    turnOn[cor]();
    nextINdex();
  };
  const stopInterval = () => {
    clearInterval(interval);
  };

  const turnOn = {
    red: () => (img.src = "img/vermelho.png"),
    yellow: () => (img.src = "img/amarelo.png"),
    green: () => (img.src = "img/verde.png"),
    auto: () => (interval = setInterval(color, 1000)),
  };

  buttons.forEach((button) => {
    button.addEventListener("click", changeColor);
  });
})();
