class Player {
    constructor(game) {
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.x = 350;
        this.y = 0
        this.playerWidth = 50;
        this.playerHeight = 65;
        this.vx = 0;
        this.vy = 0.5;
        this.score = 0;
        this.gravity = 0.05;
        this.img = new Image();
        this.img.src = "images/character.png";
    }

    draw() {
        this.context.drawImage(this.img, this.x, this.y, this.playerWidth, this.playerHeight);
    }
    
update() {
        this.x += this.vx;
        this.y += this.vy;
        this.y += this.gravity;
        this.vy += this.gravity;
    }

} 
