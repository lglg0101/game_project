const $canvas = document.querySelector("#mainCanvas");

const $display = document.querySelector('#displayCanvas');

const game = new Game($canvas, $display);

const startText = document.querySelector(".startText")

let context = $canvas.getContext("2d");

let resetText = document.querySelector(".resetText"); 


//html element for second 'canvas' 
const $clipCanvas = document.getElementById('clipCanvas'); 

let $clipCanvasBg = document.getElementsByClassName('container2')



window.addEventListener('load', () => {
    startText.addEventListener('click', () => {
      $clipCanvas.style.background = "#f3f3f3 url('images/smallCanvas.png') no-repeat";
      game.start();
      startText.style.display = "none";

      resetText.textContent = "TRY AGAIN";
      resetText.addEventListener('click', () => {
        $clipCanvas.style.background = "#f3f3f3 url('images/smallCanvas.png') no-repeat";
        game.reset();
        $clipCanvas.style.background = "#f3f3f3 url('images/smallCanvas.png') no-repeat";
        game.start();
      });
}); 

});

