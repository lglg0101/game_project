class Grid { 
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.gameOverImg = new Image ();
        this.gameOverImg.src = 'images/character2.png' 
    } 

drawGrid() { 
        this.context.save();
        this.context.drawImage(this.gameOverImg, 0, 0, 500, 400);
        this.context.restore();
} 
} 