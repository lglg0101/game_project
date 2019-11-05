class Gameover { 
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.gameOverImg = new Image ();
        this.gameOverImg.src = 'images/character2.png' 
    } 

draw() { 
        this.context.save();
        this.context.drawImage(this.gameOverImg, 0, 0, 500, 400);
        this.context.restore();
} 
} 