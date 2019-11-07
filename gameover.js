class Gameover { 
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.gameOverImg = new Image ();
        this.gameOverImg.src = 'images/character2.png' 

        this.winImg = new Image ();
        this.winImg.src = 'images/happypepe.png'
    } 

draw() { 
        this.context.save();
        this.context.drawImage(this.gameOverImg, 0, 50, 500, 400);
        this.context.restore();
} 

win(){ 
    if(this.game.score.videoNumber === 30 || (this.clipsArray === [] && this.audioArray === [])) { 
        this.game.end = true;
        this.winDraw(); 
    }
}

winDraw() { 
        this.context.save();
        this.context.drawImage(this.winImg, 0, 0, 500, 450);
        this.context.restore();
}


reset () { 

    // if(this.game.end === true) { 

    this.context.clearRect(0, 0, this.game.$canvas.width, this.game.$canvas.height);

        // this.troll = [];
        // this.video = [];
        // this.coin = [];
        
} 
} 
