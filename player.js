class Player {
    constructor(game) {
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.x = 350;
        this.y = 0
        this.playerWidth = 40;
        this.playerHeight = 60;
        this.vx = 0;
        this.vy = 0.3;
        this.score = 0;
        this.gravity = 0.009;
        this.rockbottom = this.height - this.playerHeight;
        //   this.life = 3;
        this.img = new Image();
        this.img.src = "images/character.png";
    }

    draw() {
        this.context.drawImage(this.img, this.x, this.y, this.playerWidth, this.playerHeight);
    }
   

// hitBottom() {
//     if (this.y > this.rockbottom) {
//     this.y = this.rockbottom;
//     clearInterval(intervalId);
//     //     }
//     // }
    
update() {
        this.x += this.vx;
        this.y += this.vy;
        this.y += this.gravity;
        this.vy += this.gravity;
        // this.hitBottom();
    }
} 
