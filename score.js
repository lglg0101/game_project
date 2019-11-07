class Score {
    constructor(game) {
    this.game = game;
    this.context = game.context;

    //points  
    this.score = 0;
    this.coinScore = 10;
    this.videoScore = 50;

    //number of videos 
    this.videoNumber = 0;
    this.videoNumScore = 1;

    this.saved = 0;
    }


    coinPoints() {
    this.score += this.coinScore
    }

    videoPoints() {
    this.score += this.videoScore;
    }

    videoNum() { 
    this.videoNumber += this.videoNumScore;
    }

    scoreTotal() {
    this.totalScore;
    }

draw(){ 
    const context = this.game.context;
    context.font = '15px monospace'; 
    context.fillStyle = 'black'; 

    context.fillText("Points:", 500, 75);

    context.font = '15px monospace'; 
    context.fillStyle = 'white'; 

    context.fillText(`${this.score}`, 590, 75); 

} 

drawVideo(){
    const context = this.game.context;
    context.font = '15px monospace'; 
    context.fillStyle = 'black'; 
    context.fillText(`Video's Collected:`, 10, 75);
    context.fillStyle = 'red'; 
    context.fillText(`${this.videoNumber}`, 190, 75);
    context.fillStyle = 'black'; 
    context.fillText(`/20`, 200, 75);
}

resetScore() {
           this.score = 0; 
    } 

highScore() {
    if(this.score > this.saved){ 
        this.saved += this.score; } 
        const context = this.game.context;
        context.font = '15px monospace'; 
        context.fillStyle = 'black'; 
        context.fillText(`High Score: `, 280, 75)
        context.fillStyle = 'red'; 
        context.fillText(`${this.saved}`, 380, 75);
        
    }
} 
