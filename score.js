class Score {
    constructor(game) {
    this.game = game;
    this.context = game.context;    
    this.score = 0;
    this.coinScore = 10;
    this.videoScore = 50;
    }

    coinPoints() {
    this.score += this.coinScore
    }

    videoPoints() {
    this.score += this.videoScore;
    }

    scoreTotal () {
    this.totalScore;
    }

  
levelUpdate() {
        if (this.game.score.score = this.game.score.score + 50) {
        this.game.speed = this.game.speed - 500
            }
        }  

    resetScore() {
           this.score = 0; 
    } 
} 