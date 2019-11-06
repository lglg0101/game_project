const $canvas = document.querySelector("#mainCanvas");

const $display = document.querySelector('#displayCanvas');

const game = new Game($canvas, $display);

const startText = document.querySelector(".startText")

let context = $canvas.getContext("2d");


//html element for second canvas 
const $clipCanvas = document.getElementById('clipCanvas'); 





window.addEventListener('load', () => {
    startText.addEventListener('click', () => {
      // $clipCanvas.style.backgroundImage = url();
      game.start();
    });
});