const $canvas = document.querySelector('canvas');

const game = new Game($canvas);
const startText = document.querySelector(".startText")


window.addEventListener('load', () => {
    startText.addEventListener('click', () => {
      game.start();
    });
});