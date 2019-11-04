class Player {
    constructor(game) {
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.x = game.width/2;
        this.y = 0
        this.playerWidth = 40;
        this.playerHeight = 60;
        this.vx = 0;
        this.vy = 0.2;
        this.score = 0;
        this.gravity = 0.005;
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
    //         this.y = this.rockbottom;
    //       clearInterval(intervalId);
    //     }
    // }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.y += this.gravity;
        this.vy += this.gravity;
        // this.hitBottom();
    }

    // boundaries() {
    //        if (this.x - this.playerWidth < 0) this.x = this.playerWidth;
    //        if (this.x + this.playerWidth > this.width)
    //            this.x = this.width - this.playerWidth;
    //     if (this.y - this.playerHeight < 0) this.y = this.playerHeight;
    //     if (this.y + this.playerHeight > this.height)
    //             this.y = this.height - this.playerHeight;
    //         }
    }