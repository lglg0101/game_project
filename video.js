class Video {
    constructor(game, audio) {
      this.height = game.height;
      this.width = game.width;
      this.context = game.context;
      this.objectWidth = 40;
      this.objectHeight = 40; 
      this.y = this.height;
      this.x = Math.floor((Math.random() * this.width) + 10);
      this.vy = -1;
      this.vx = -1;
      this.img = new Image();
      this.img.src = 'images/red.png'; 
    //   this.audio = new Audio();
    //   this.audio.src = ""; 
    
    }

    draw() {
    this.context.save();
    this.context.drawImage(this.img, this.x, this.y, this.objectWidth,  this.objectHeight);
    this.context.restore();

    }
    update() {
      this.y += this.vy;
    }
  }