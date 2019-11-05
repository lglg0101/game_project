class Troll {
    constructor(game) {
      this.height = game.height;
      this.width = game.width;
      this.objectWidth = 60;
      this.objectHeight = 60; 
      this.context = game.context;
      this.y = this.height;
      this.x = Math.floor((Math.random() * this.width) + 10);
      this.vy = -4;
      this.vx = -4;
      this.score = 100; 
      this.img = new Image();
      this.img.src = `images/trollface.png`;
      
      this.img2 = new Image();
      this.img2.src = 'images/character2.png';
    }

    draw() {
    this.context.save();
    this.context.drawImage(this.img, this.x, this.y, this.objectWidth, this.objectHeight);
    this.context.restore();
    } 

    drawNew() { 
    this.context.save();
    this.context.drawImage(this.img2, this.x, this.y, this.objectWidth, this.objectHeight);
    this.context.restore();
    }

   
    update() {
      this.y += this.vy;
    }
  }