const $canvas = document.querySelector("#mainCanvas");
const $display = document.querySelector('#displayCanvas');

const game = new Game($canvas, $display);

const startText = document.querySelector(".startText")


window.addEventListener('load', () => {
    startText.addEventListener('click', () => {
      game.start();
    });
});