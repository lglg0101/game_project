class Troll {
    constructor(game) {
    
      this.height = game.height;
      this.width = game.width;
      this.context = game.context;
      this.y = this.height;
      this.x = Math.floor((Math.random() * this.width) + 10);
      this.vy = -3;
      this.vx = -3;
      this.img = new Image();
      this.img.src = `images/trollface.png`;
    }

    draw() {
    this.context.save();
    this.context.drawImage(this.img, this.x, this.y, 40, 40);
    this.context.restore();

    }
   
    update() {
      this.y += this.vy;
    }
  }